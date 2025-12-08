const VERSION = "v3";
const CORE_CACHE = `dtc-core-${VERSION}`;
const RUNTIME_CACHE = `dtc-runtime-${VERSION}`;

const CORE_ASSETS = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/icons/app-icon-192.png",
  "/icons/app-icon-512.png",
  "/images/Logo_IDEA.webp"
];

const STATIC_DESTINATIONS = new Set(["style", "script", "font", "image"]);
const STATIC_EXTENSIONS = /\.(css|js|ts|tsx|svg|png|jpe?g|gif|webp|ico|woff2?)$/i;

const cachePutSafe = async (cacheName, request, response) => {
  if (!response || response.status !== 200 || response.type === "opaque") return;
  const cache = await caches.open(cacheName);
  await cache.put(request, response);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CORE_CACHE).then((cache) => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => ![CORE_CACHE, RUNTIME_CACHE].includes(key))
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // No interceptar llamadas a APIs externas
  if (url.hostname === "api.openai.com") return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then(async (response) => {
          await cachePutSafe(CORE_CACHE, request, response.clone());
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          if (cached) return cached;
          return caches.match("/index.html");
        })
    );
    return;
  }

  const isSameOrigin = url.origin === self.location.origin;
  const looksStatic =
    STATIC_DESTINATIONS.has(request.destination) || STATIC_EXTENSIONS.test(url.pathname);

  if (isSameOrigin && looksStatic) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request)
          .then(async (response) => {
            await cachePutSafe(RUNTIME_CACHE, request, response.clone());
            return response;
          })
          .catch(() => cached);
      })
    );
  }
});
