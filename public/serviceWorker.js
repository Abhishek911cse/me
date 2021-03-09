let CACHE_NAME = "ARs Portfolio";
const urlsToCache = [
  "/",
  "/me/",
  "/me/manifest.json",
  "/me/serviceWorker.js",
  "/me/favicon.ico",
  "/me/apple-touch-icon.png",
  "/me/favicon-16x16.png",
  "/me/favicon-32x32.png",
  "/me/android-chrome-512x512.png",
  "/me/android-chrome-192x192.png",
  "/me/static/js/bundle.js",
  "/me/static/js/0.chunk.js",
  "/me/static/js/main.chunk.js",
  `/me/static/media/marten-bjork-aTt_rNa3gmM-unsplash_edited.eeb7279a.jpg`,
  `/me/static/media/todoAppProj.285736e7.png`,
  `/me/static/media/osVisualizerProj.b0d31383.png`,
  `/me/static/media/pharmacyProjImg.0e68e853.jpg`,
  `/me/static/media/about-img-edited.90446a83.jpg`,
  `/me/static/media/profileImg.11371daa.jpg`,
];
// Perform install steps
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      console.log("[Service Worker] Caching all: app shell and content");
      await cache.addAll(urlsToCache);
    })()
  );
  self.skipWaiting();
});
// event.waitUntil(
//   caches.open(CACHE_NAME).then(function (cache) {
//     console.log("Opened cache");
//     return cache.addAll(urlsToCache);
//   })
// );
// });

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  var cacheWhitelist = ["ARs Portfolio"];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
