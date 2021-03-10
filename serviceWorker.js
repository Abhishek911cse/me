let APP_PREFIX = "ARs Portfolio"; // Identifier for this app (this needs to be consistent across every cache update)
var VERSION = "version_02"; // Version of the off-line cache (change this value everytime you want to update cache)
var CACHE_NAME = APP_PREFIX + VERSION;
const URLS = [
  // "/",
  "/me/",
  // "/me/manifest.json",
  // "/me/serviceWorker.js",
  // "/me/favicon.ico",
  // "/me/apple-touch-icon.png",
  // "/me/favicon-16x16.png",
  // "/me/favicon-32x32.png",
  // "/me/android-chrome-512x512.png",
  // "/me/android-chrome-192x192.png",
  // "/me/static/js/bundle.js",
  // "/me/static/js/0.chunk.js",
  // "/me/static/js/main.chunk.js",
  // `/me/static/media/marten-bjork-aTt_rNa3gmM-unsplash_edited.eeb7279a.jpg`,
  // `/me/static/media/todoAppProj.285736e7.png`,
  // `/me/static/media/osVisualizerProj.b0d31383.png`,
  // `/me/static/media/pharmacyProjImg.0e68e853.jpg`,
  // `/me/static/media/about-img-edited.90446a83.jpg`,
  // `/me/static/media/profileImg.11371daa.jpg`,
];
// Perform install steps
self.addEventListener("fetch", function (e) {
  console.log("fetch request : " + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) {
        // if cache is available, respond with cache
        console.log("responding with cache : " + e.request.url);
        return request;
      } else {
        // if there are no cache, try fetching request
        console.log("file is not cached, fetching : " + e.request.url);
        return fetch(e.request);
      }

      // You can omit if/else for console.log & put one line below like this too.
      // return request || fetch(e.request)
    })
  );
});

// Cache resources
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("installing cache : " + CACHE_NAME);
      return cache.addAll(URLS);
    })
  );
});

// Delete outdated caches
self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      // `keyList` contains all cache names under your username.github.io
      // filter out ones that has this app prefix to create white list
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX);
      });
      // add current cache name to white list
      cacheWhitelist.push(CACHE_NAME);

      return Promise.all(
        keyList.map(function (key, i) {
          if (cacheWhitelist.indexOf(key) === -1) {
            console.log("deleting cache : " + keyList[i]);
            return caches.delete(keyList[i]);
          }
        })
      );
    })
  );
});
