# CKEditor Frontend Demo

This folder contains a small Vite demo for CKEditor 5 with MathType.

## Run the frontend demo

Use these steps once the backend is already running.

1. Go to the demo folder:
   ```bash
   cd frontend/ckeditor
   ```
2. Install dependencies (first time only):
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the URL shown by Vite (usually [http://localhost:5173](http://localhost:5173)).

## MathType integration services (brief)

The frontend points MathType to the integration service in `app.js`:

```js
mathTypeParameters: {
  serviceProviderProperties: {
    URI: '/pluginwiris_engine/app/configurationjs',
    server: 'java'
  }
}
```

To adapt this for your environment:

- Update `URI` in `frontend/ckeditor/app.js` if host, port, or context path changes.
- Keep `server: 'java'` when using the Java integration service.
- In `backend/configurations/configuration.ini`, verify service host/protocol/port/path values (for example `wirisimageservicehost`, `wirisimageserviceport`, `wirisimageserviceprotocol`, `wirisimageservicepath`) match your backend deployment.

## CORS and Hand (`handPath`) explanation

When the frontend runs on `http://localhost:5173/5174` and MathType backend runs on `http://localhost:8080`, browser requests are cross-origin (different port = different origin). Browsers enforce CORS for these requests.

That means if MathType/Hand assets (for example `/hand/hand.js`) are requested directly from `http://localhost:8080` and the response does not include the required CORS headers, the browser blocks them and Hand UI does not appear.

### Why this repo uses Vite proxy

This demo uses `vite.config.js` proxy rules so requests like `/pluginwiris_engine/...` and `/hand/...` are sent to Vite first (same origin as the page), then forwarded to `localhost:8080` by Vite. From the browser perspective, this avoids cross-origin requests and removes CORS issues during local development.

### Recommended `handPath` shape

In `backend/configurations/configuration.ini`, keep `wiriseditorparameters.handPath` as a path:

```ini
wiriseditorparameters = {"language":"en","toolbar":"general","handPath":"/hand"}
```

### Other valid approaches

- Configure backend CORS comprehensively for all needed endpoints/methods/headers.
- Serve frontend and backend from the same origin behind a reverse proxy (recommended for production).
- Serve frontend static files directly from the backend origin.
