# Shopping List PWA 🛒

Minimalistyczna aplikacja mobilna do tworzenia i zarządzania listami zakupów, zoptymalizowana jako Progressive Web App (PWA) dla iPhone i innych urządzeń mobilnych.

## ✨ Funkcjonalności

### 🛍️ Podstawowe funkcje:
- ➕ **Dodawanie produktów** z nazwą i ceną
- ✅ **Oznaczanie jako kupione** poprzez kliknięcie
- 🗑️ **Usuwanie produktów** z listy
- 💰 **Automatyczne obliczanie kosztów** (łączny i kupione)
- 📱 **Zakończenie i zapis listy** do historii
- 📋 **Historia wszystkich list** w zakładce "Moje Listy"
- ✏️ **Edycja zapisanych list** - dodawanie/usuwanie produktów, zmiana cen
- 🗂️ **Usuwanie zapisanych list** z historii

### 📊 Podsumowania:
- 📅 **Bieżący miesiąc** - widok aktualnych wydatków miesięcznych
- 📈 **Podsumowania tygodniowe** - wydatki z podziałem na tygodnie
- 📆 **Podsumowania miesięczne** - historia wydatków miesięcznych
- 💰 **Podział na kategorie** - osobno listy zakupowe i paragony
- 🔢 **Automatyczne sumowanie** - łączna kwota dla każdego okresu
- 📱 **Responsywny widok** - przewijalne listy dla długiej historii

### 🧾 Paragony:
- 💸 **Szybkie dodawanie paragonów** - wystarczy wpisać całkowitą kwotę
- 📝 **Notatki do paragonów** - możliwość dodania opisu (nazwa sklepu, rodzaj zakupów)
- 📅 **Automatyczny zapis daty i godziny** - każdy paragon zapisuje się z dokładnym czasem
- 📊 **Lista wszystkich paragonów** - chronologiczna historia wydatków z notatkami
- 💵 **Suma paragonów** - automatyczne obliczanie łącznej kwoty
- 🗑️ **Usuwanie paragonów** z historii

### 🧠 Inteligentne funkcje:
- 💡 **Automatyczne sugestie** produktów na podstawie historii
- 💾 **Zapamiętywanie cen** - aplikacja pamięta ostatnie ceny produktów
- ✏️ **Edycja cen** w czasie rzeczywistym
- 📊 **Szczegółowe statystyki** list zakupowych

### 💾 Backup i bezpieczeństwo danych:
- 📤 **Eksport danych** - pobieranie kopii zapasowej w formacie JSON
- 📥 **Import danych** - przywracanie z pliku backup
- 🗂️ **Informacje o danych** - statystyki zapisanych list, historii cen i paragonów
- 🗑️ **Czyszczenie danych** - bezpieczny reset z potwierdzeniem
- 💾 **Lokalne przechowywanie** - wszystkie dane zapisane w przeglądarce

### 📱 PWA i offline:
- 📱 **Pełna obsługa PWA** - działa offline, można zainstalować na telefonie
- 🔄 **Synchronizacja offline** - wszystkie zmiany zapisywane lokalnie
- ⚡ **Szybkie ładowanie** - aplikacja startuje błyskawicznie

## 🎨 Design

- **Minimalistyczny interfejs** z jaskrawymi kolorami
- **Główne kolory**: Fiolet (#8B5CF6) i Żółty (#FDE047)
- **Responsywny design** dla urządzeń mobilnych
- **Smooth animacje** i efekty hover
- **Safe area** dla iPhone (obsługa notch)
- **Profesjonalna ikona** z gradienty i siatką koszyka
- **Modalne okna** z backdrop blur dla lepszego UX
- **4 zakładki**: Lista, Moje Listy, Paragony, Podsumowania

## 📊 Zakładka "Podsumowania"

Zakładka Podsumowania automatycznie analizuje wszystkie Twoje wydatki i prezentuje je w przejrzysty sposób:

### Widok bieżącego miesiąca:
- **Wyróżniony panel** z gradientem w kolorze aplikacji
- **Podział na kategorie**: osobno listy zakupowe i paragony
- **Łączna suma** wydatków w bieżącym miesiącu
- **Nazwa miesiąca** w języku polskim

### Podsumowania tygodniowe:
- **Ostatnie 8 tygodni** wydatków
- **Zakres dat** dla każdego tygodnia (poniedziałek-niedziela)
- **Podział** na listy zakupowe i paragony
- **Suma tygodniowa** dla łatwego śledzenia trendów

### Podsumowania miesięczne:
- **Ostatnie 12 miesięcy** historii wydatków
- **Nazwa miesiąca i rok** dla łatwej identyfikacji
- **Szczegółowy podział** na kategorie
- **Przewijalna lista** dla długiej historii

### Automatyczne obliczenia:
- Dane są obliczane w czasie rzeczywistym
- Uwzględniają zarówno zapisane listy jak i paragony
- Poprawnie obsługują polskie formaty dat
- Sortowanie od najnowszych do najstarszych

## 📱 Tryb Offline

Aplikacja jest w pełni funkcjonalna w trybie offline, w tym:
- ✈️ **Tryb samolotowy** - wszystkie funkcje działają bez internetu
- 📵 **Brak zasięgu** - dane są zapisywane lokalnie
- 🔄 **Automatyczna synchronizacja** - przy powrocie online
- 💾 **Cache'owanie zasobów** - wszystkie pliki są zapisane lokalnie
- 🔔 **Wskaźnik offline** - informuje o braku połączenia

### Jak działa tryb offline:
1. **Pierwsze uruchomienie** - wymaga jednorazowego połączenia z internetem
2. **Service Worker** - pobiera i zapisuje wszystkie zasoby
3. **Kolejne uruchomienia** - działają całkowicie offline
4. **Aktualizacje** - pobierane automatycznie gdy jest połączenie

### Wskazówki:
- Ikona 📵 pojawi się na dole ekranu w trybie offline
- Wszystkie dane są bezpiecznie zapisane w przeglądarce
- Import/eksport działa również offline
- Niestandardowe czcionki mogą nie działać przy pierwszym uruchomieniu offline

## 🚀 Instalacja na GitHub Pages

### Krok 1: Przygotowanie plików
Stwórz nowe repozytorium na GitHub i wgraj następujące pliki:

```
shopping-list-pwa/
├── index.html          (główny plik aplikacji - NOWA WERSJA Z PARAGONAMI)
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
- ✅ Import/eksport danych przez Safari
- ✅ Natywne powiadomienia (przy dalszym rozwoju)

## 💾 Backup i przywracanie danych

### Jak zrobić kopię zapasową:
1. Kliknij ikonę ustawień ⚙️ w prawym górnym rogu
2. W sekcji "Eksport danych" kliknij "Pobierz backup"
3. Plik JSON zostanie pobrany z nazwą `shopping-list-backup-YYYY-MM-DD.json`

### Jak przywrócić dane:
1. Kliknij ikonę ustawień ⚙️ w prawym górnym rogu
2. W sekcji "Import danych" kliknij "Wybierz plik backup"
3. Wybierz plik JSON z kopią zapasową
4. Dane zostaną automatycznie przywrócone

### Format pliku backup:
```json
{
  "version": "1.0",
  "exportDate": "2025-07-01T12:00:00.000Z",
  "savedLists": [...],
  "priceHistory": {...},
  "currentItems": [...],
  "paragony": [...]
}
```

## 🔧 Struktura techniczna

### Główne technologie:
- **React 18** - biblioteka UI
- **Vanilla JavaScript** - logika aplikacji
- **Tailwind CSS** - stylizacja
- **Service Worker** - obsługa offline
- **localStorage** - trwałe przechowywanie danych
- **File API** - import/eksport plików JSON

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

// Historia cen produktów
'shopping-list-price-history': {
  "Mleko": 4.50,
  "Chleb": 3.20,
  "Masło": 8.90
}

// Paragony
'shopping-list-paragony': [
  {
    id: timestamp,
    kwota: number,
    notatka: string,
    data: ISOString
  }
]
```

### Funkcje pomocnicze:
- **getWeekNumber()** - oblicza numer tygodnia w roku
- **getWeekKey()** - generuje klucz tygodnia (YYYY-WXX)
- **getMonthKey()** - generuje klucz miesiąca (YYYY-MM)
- **getWeekDateRange()** - oblicza zakres dat dla tygodnia
- **calculateSummaries()** - agreguje dane z list i paragonów
- **Obsługa polskich dat** - konwersja DD.MM.YYYY na obiekty Date

### Service Worker Cache:
- Statyczne pliki aplikacji (STATIC_CACHE)
- Dynamiczne zasoby (DYNAMIC_CACHE)
- Zewnętrzne biblioteki (React, Tailwind)
- Google Fonts z fallbackiem
- Ikony aplikacji
- Strategia: Cache First dla zasobów lokalnych, Network First dla zewnętrznych
- Offline-first approach z automatycznymi aktualizacjami

### Nowe komponenty (v3.2):
- **Summaries Tab** - zakładka z podsumowaniami wydatków
- **Weekly/Monthly Calculations** - automatyczne obliczanie sum
- **Date Range Display** - wyświetlanie zakresów dat dla tygodni
- **Current Month Highlight** - wyróżniony widok bieżącego miesiąca

### Nowe komponenty (v3.0):

## 🔄 Historia wersji

### v3.3 (Lipiec 2025)
- ➕ Pełna obsługa trybu offline
- ➕ Ulepszone cache'owanie wszystkich zasobów
- ➕ Wskaźnik trybu offline
- ➕ Rozwijane menu zamiast zakładek
- 🔧 Poprawiona obsługa Google Fonts w trybie offline
- 🔧 Zaktualizowany Service Worker z lepszą strategią cache
- 🔧 Dodane fallbacki dla wszystkich zewnętrznych zasobów

### v3.2 (Lipiec 2025)
- ➕ Dodano zakładkę "Podsumowania"
- ➕ Widok bieżącego miesiąca z podziałem na kategorie
- ➕ Podsumowania tygodniowe (ostatnie 8 tygodni)
- ➕ Podsumowania miesięczne (ostatnie 12 miesięcy)
- ➕ Automatyczne obliczanie sum z list zakupowych i paragonów
- 🔧 Zmniejszone rozmiary czcionek w zakładkach (4 zakładki)
- 🔧 Responsywne listy z przewijaniem

### v3.1 (Lipiec 2025)
- ➕ Dodano możliwość dodawania notatek do paragonów
- ➕ Pole tekstowe dla opisu paragonu (nazwa sklepu, rodzaj zakupów)
- 🔧 Ulepszone wyświetlanie paragonów z notatkami
- 🔧 Automatyczne czyszczenie formularza przy zmianie zakładek

### v3.0 (Lipiec 2025)
- ➕ Dodano zakładkę "Paragony"
- ➕ Szybkie dodawanie paragonów z automatyczną datą i godziną
- ➕ Lista wszystkich paragonów z sumą
- ➕ Wsparcie dla paragonów w eksporcie/imporcie
- 🔧 Zmniejszone rozmiary czcionek w zakładkach dla lepszego dopasowania
- 🔧 Ulepszone kolory i style dla spójności aplikacji

### v2.0 (Lipiec 2025)
- ➕ Dodano funkcjonalność import/eksport danych
- ➕ Panel ustawień z backup/restore
- ➕ Inteligentne sugestie produktów
- ➕ Historia cen i automatyczne uzupełnianie
- ➕ Statystyki danych w aplikacji
- ➕ Bezpieczne usuwanie wszystkich danych
- 🔧 Ulepszone modalne okna z backdrop blur
- 🔧 Lepsze zarządzanie stanem aplikacji

### v1.0 (Początkowa wersja)
- ✅ Podstawowe funkcje listy zakupowej
- ✅ PWA z offline support
- ✅ Historia zapisanych list
- ✅ Responsive design dla mobile

---

Aplikacja została zaprojektowana z myślą o prostocie użytkowania, maksymalnej funkcjonalności offline i bezpieczeństwie danych użytkownika. 🛡️