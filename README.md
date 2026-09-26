# PouchPrice

PouchPrice is an Expo mobile app for finding nearby nicotine pouch prices and submitting price reports. It uses location to list nearby stores, shows store stock and price details, and provides a form for contributing a store, brand, and price.

## Run the app

Install Node.js and npm, then from this directory run:

```bash
npm ci
npm start
```

Use the Expo terminal menu to open the app on Android, iOS, or the web. The package also provides `npm run android`, `npm run ios`, and `npm run web`. Mobile location access is needed for the nearby-store view.

The screens currently call the hosted PouchPrice API at `https://pouchpricebackend-production.up.railway.app`. For a local backend, change the `backend` constants in `src/app/(tabs)/index.tsx`, `src/app/(tabs)/contribute.tsx`, and `src/app/storeInfo.tsx` to a URL reachable from your device or emulator. The backend is a separate project and is not included in this repository.

## Code map

| Path | Purpose |
| --- | --- |
| `src/app/(tabs)/index.tsx` | Nearby store list |
| `src/app/(tabs)/contribute.tsx` | Price submission form |
| `src/app/storeInfo.tsx` | Individual store details |
| `src/components/` | Store cards, location search, and loading UI |
| `src/styles/` | Shared styling |

The main search input and the store-detail Directions and Share buttons are present in the UI but are not wired to actions yet. Run `npm run lint` for the configured Expo lint check.
