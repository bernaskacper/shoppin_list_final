const CACHE_NAME = 'shopping-list-v2';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './icons/apple-touch-icon-180x180.png',
  './icons/apple-touch-icon-152x152.png',
  './icons/apple-touch-icon-120x120.png',
  './icons/apple-touch-icon-76x76.png',
  './icons/favicon-32x32.png',
  './icons/favicon-16x16.png',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js'
];

// Install event - cache resources
self.addEventListener('install', function(event) {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker: Cached all files successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Caching failed', error);
      })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          console.log('Service Worker: Serving from cache', event.request.url);
          return response;
        }

        // Clone the request because it's a stream
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response because it's a stream
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        ).catch(() => {
          // If fetch fails, try to serve a cached fallback
          console.log('Service Worker: Fetch failed, serving offline page');
          return new Response('Aplikacja działa offline. Sprawdź połączenie internetowe.', {
            headers: { 'Content-Type': 'text/plain; charset=utf-8' }
          });
        });
      })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Activated successfully');
      return self.clients.claim();
    })
  );
});

// Handle background sync for offline functionality
self.addEventListener('sync', function(event) {
  if (event.tag === 'background-sync') {
    console.log('Service Worker: Background sync triggered');
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Here you could sync data when connection is restored
  return Promise.resolve();
}