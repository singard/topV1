/** VARS */
const CACHE_NAME = "offline";
const OFFLINE_URL = "offline.html";

/** FUNCTIONS */

const ORIGIN_URL = `${location.protocol}//${location.host}`;
const CACHED_FILES = [
  OFFLINE_URL,
  `${ORIGIN_URL}/offline.html`,
  `${ORIGIN_URL}/img/offline.gif`,
];
const waitUntilInstallationPromise = () =>
  new Promise((resolve) => {
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(CACHED_FILES).then(resolve);
    });
  });


/** Fetch */

const respondWithFetchPromiseNavigate = (event) =>
  new Promise((resolve) => {
    event.preloadResponse.then(() => {
      event.preloadResponse.then((preloadResponse) => {
        if (preloadResponse) {
          resolve(preloadResponse);
        }

        // Always try the network first.
        fetch(event.request)
          .then((networkResponse) => {
            resolve(networkResponse);
          })
          // send cache offline.html
          .catch(() => {
            caches.open(CACHE_NAME).then((cache) => {
              cache.match(OFFLINE_URL).then((cachedResponse) => {
                resolve(cachedResponse);
              });
            });
          });
      });
    });
  });

  const fetchSW = (event) => {
    // We only want to call event.respondWith() if this is a navigation request
    // for an HTML page.
    if (event.request.mode === "navigate") {
      event.respondWith(respondWithFetchPromiseNavigate(event));
    } else if (CACHED_FILES.includes(event.request.url)) {
      event.respondWith(caches.match(event.request));
    }
  };
  

/*********************************** */

/** Install */
const waitUntilInstallationPromise = () =>
  new Promise((resolve) => {
    caches.open(CACHE_NAME).then((cache) => {
      cache.add(new Request(OFFLINE_URL, { cache: "reload" })).then(resolve);
    });
  });

const installSW = (event) => {
  event.waitUntil(waitUntilInstallationPromise());

  // Force the waiting service worker to become the active service worker.
  self.skipWaiting();
};
/*********************************** */

/** INIT */
self.addEventListener("install", installSW);

self.addEventListener("fetch", fetchSW);