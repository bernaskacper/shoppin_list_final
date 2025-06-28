# Shopping List PWA 🛒

Minimalistyczna aplikacja mobilna do tworzenia i zarządzania listami zakupów, zoptymalizowana jako Progressive Web App (PWA) dla iPhone i innych urządzeń mobilnych.

## ✨ Funkcjonalności

- ➕ **Dodawanie produktów** z nazwą i ceną
- ✅ **Oznaczanie jako kupione** poprzez kliknięcie
- 🗑️ **Usuwanie produktów** z listy
- 💰 **Automatyczne obliczanie kosztów** (łączny i kupione)
- 📱 **Zakończenie i zapis listy** do historii
- 📋 **Historia wszystkich list** w zakładce "Moje Listy"
- 🗂️ **Usuwanie zapisanych list** z historii
- 💾 **Zapisywanie danych lokalnie** (localStorage)
- 📱 **Pełna obsługa PWA** - działa offline, można zainstalować na telefonie

## 🎨 Design

- **Minimalistyczny interfejs** z jaskrawymi kolorami
- **Główne kolory**: Fiolet (#8B5CF6) i Żółty (#FDE047)
- **Responsywny design** dla urządzeń mobilnych
- **Smooth animacje** i efekty hover
- **Safe area** dla iPhone (obsługa notch)
- **Profesjonalna ikona** z gradienty i siatką koszyka

## 🚀 Instalacja na GitHub Pages

### Krok 1: Przygotowanie plików
Stwórz nowe repozytorium na GitHub i wgraj następujące pliki:

```
shopping-list-pwa/
├── index.html          (główny plik aplikacji)
├── manifest.json       (manifest PWA)
├── sw.js              (service worker)
├── README.md          (ten plik)
└── icons/             (folder z ikonami)
    ├── icon-72x72.png
    ├── icon-96x96.png
    ├── icon-128x128.png
    ├── icon-144x144.png
    ├── icon-152x152.png
    ├── icon-192x192.png
    ├── icon-384x384.png
    ├── icon-512x512.png
    ├── apple-touch-icon-180x180.png
    ├── apple-touch-icon-152x152.png
    ├── apple-touch-icon-120x120.png
    ├── apple-touch-icon-76x76.png
    ├── favicon-32x32.png
    └── favicon-16x16.png
```

### Krok 2: Generowanie ikon
**Nowy design ikony (poprawiony):**
- **Tło**: Gradient fioletowy (#8B5CF6 → #7C3AED)
- **Koszyk**: Żółty gradient (#FDE047 → #FACC15) z białym obramowaniem
- **Siatka**: Lekka fioletowa siatka wewnątrz koszyka dla lepszego efektu
- **Koła**: Żółte koła z fioletowymi środkami
- **Uchwyt**: Zaokrąglony, ergonomiczny design
- **Styl**: Nowoczesny, czytelny, profesjonalny

Wykorzystaj dostarczoną ikonę SVG jako bazę. Możesz też użyć:
- [PWA Builder](https://www.pwabuilder.com/) - do konwersji SVG na różne rozmiary
- [Favicon.io](https://favicon.io/) - generator favikon
- [RealFaviconGenerator](https://realfavicongenerator.net/) - kompleksowy generator ikon

### Krok 3: Włączenie GitHub Pages
1. Idź do Settings repozytorium
2. Przewiń do sekcji "Pages"
3. Wybierz "Deploy from a branch"
4. Wybierz "main" branch
5. Wybierz "/ (root)"
6. Kliknij "Save"

### Krok 4: Testowanie
Po kilku minutach aplikacja będzie dostępna pod adresem:
`https://[twoja-nazwa-użytkownika].github.io/[nazwa-repozytorium]/`

## 📱 Instalacja na iPhone

### Przez Safari:
1. Otwórz aplikację w Safari na iPhone
2. Kliknij przycisk "Udostępnij" (kwadrat ze strzałką)
3. Przewiń w dół i wybierz "Dodaj do ekranu głównego"
4. Dostosuj nazwę aplikacji
5. Kliknij "Dodaj"

### Funkcje PWA na iPhone:
- ✅ Ikona na ekranie głównym
- ✅ Pełnoekranowy tryb (bez paska Safari)
- ✅ Działanie offline
- ✅ Zapisywanie danych lokalnie
- ✅ Natywne powiadomienia (przy dalszym rozwoju)

## 🔧 Struktura techniczna

### Główne technologie:
- **React 18** - biblioteka UI
- **Vanilla JavaScript** - logika aplikacji
- **Tailwind CSS** - stylizacja
- **Service Worker** - obsługa offline
- **localStorage** - trwałe przechowywanie danych

### Responsywność:
- Zoptymalizowane dla ekranów 320px-480px (telefony)
- Safe area dla iPhone X+ (obsługa notch)
- Touch-friendly przyciski (minimum 44px)
- Zapobieganie zoom na focusie inputów

## 📝 Notatki dla programistów

### localStorage Structure:
```javascript
// Aktualna lista
'shopping-list-items': [
  {
    id: timestamp,
    name: string,
    price: number,
    purchased: boolean
  }
]

// Historia list
'shopping-list-history': [
  {
    id: timestamp,
    date: string,
    items: Array,
    totalCost: number,
    purchasedCost: number,
    itemsCount: number,
    purchasedCount: number
  }
]
```

### Service Worker Cache:
- Statyczne pliki aplikacji
- Zewnętrzne biblioteki (React, Tailwind)
- Ikony aplikacji
- Offline-first approach

Aplikacja została zaprojektowana z myślą o prostocie użytkowania i maksymalnej funkcjonalności offline.