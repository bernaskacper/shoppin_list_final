const CACHE_NAME = 'shopping-list-v7'; // Zwiększona wersja dla nowych zmian
const STATIC_CACHE = 'shopping-list-static-v7';
const DYNAMIC_CACHE = 'shopping-list-dynamic-v7';

// Lista plików do cache'owania
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
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
  'https://fonts.googleapis.com/css2?family=Fascinate+Inline&display=swap'
];

// Install event - cache all resources
self.addEventListener('install', function(event) {
  console.log('Service Worker v7: Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(function(cache) {
        console.log('Service Worker v7: Caching static files');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker v7: All files cached successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker v7: Caching failed', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
  console.log('Service Worker v7: Activating...');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Service Worker v7: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker v7: Activated successfully');
      return self.clients.claim();
    })
  );
});

// Fetch event - network first, then cache, with offline fallback
self.addEventListener('fetch', function(event) {
  const { request } = event;
  const url = new URL(request.url);

  // Special handling for Google Fonts
  if (url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com') {
    event.respondWith(
      caches.match(request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(request)
            .then(response => {
              if (!response || response.status !== 200) {
                return response;
              }
              const responseToCache = response.clone();
              caches.open(DYNAMIC_CACHE)
                .then(cache => {
                  cache.put(request, responseToCache);
                });
              return response;
            })
            .catch(() => {
              console.log('Service Worker v7: Font request failed, continuing without custom font');
              return new Response('', { status: 200 });
            });
        })
    );
    return;
  }

  // For app resources, try cache first
  if (request.url.includes(self.location.origin)) {
    event.respondWith(
      caches.match(request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(request)
            .then(response => {
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
              const responseToCache = response.clone();
              caches.open(DYNAMIC_CACHE)
                .then(cache => {
                  cache.put(request, responseToCache);
                });
              return response;
            });
        })
        .catch(() => {
          // Return offline page for navigation requests
          if (request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          // Return a fallback response for other requests
          return new Response('Offline - zasób niedostępny', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/plain; charset=utf-8'
            })
          });
        })
    );
    return;
  }

  // For external resources (CDN), try network first then cache
  event.respondWith(
    fetch(request)
      .then(response => {
        if (!response || response.status !== 200) {
          throw new Error('Network response was not ok');
        }
        const responseToCache = response.clone();
        caches.open(DYNAMIC_CACHE)
          .then(cache => {
            cache.put(request, responseToCache);
          });
        return response;
      })
      .catch(() => {
        return caches.match(request)
          .then(response => {
            if (response) {
              return response;
            }
            // Fallback for different resource types
            if (request.destination === 'script') {
              return new Response('console.log("Script offline fallback");', {
                headers: { 'Content-Type': 'application/javascript' }
              });
            }
            if (request.destination === 'style') {
              return new Response('/* Style offline fallback */', {
                headers: { 'Content-Type': 'text/css' }
              });
            }
            return new Response('Offline - zasób niedostępny', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain; charset=utf-8'
              })
            });
          });
      })
  );
});

// Handle background sync
self.addEventListener('sync', function(event) {
  if (event.tag === 'background-sync') {
    console.log('Service Worker v7: Background sync triggered');
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  return Promise.resolve();
}

// Handle messages
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('Service Worker v7: Received SKIP_WAITING message');
    self.skipWaiting();
  }
  
  // Cache update message
  if (event.data && event.data.type === 'UPDATE_CACHE') {
    event.waitUntil(
      caches.open(STATIC_CACHE)
        .then(cache => cache.addAll(urlsToCache))
        .then(() => {
          event.ports[0].postMessage({ type: 'CACHE_UPDATED' });
        })
    );
  }
});