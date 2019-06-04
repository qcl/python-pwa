const CACHE_NAME = 'static-cache-v2';

const FILES_TO_CACHE = [
    './index.html',
    './0.index.js',
    './1.index.js',
    './ba809633fed94322bc52.module.wasm',
    './index.js',
    './styles.css',
    './icon-152.png'
];

self.addEventListener('install', (evt) => {
    console.log('[Service Worker] install');
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Pre-cache');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
    console.log('[Service Worker] Activate');
    evt.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[Service Worker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
    console.log('[Service Worker] Fetch', evt.request.url);

    evt.respondWith(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.match(evt.request).then((response) => {
                return response || fetch(evt.request);
            });
        })
    );
});

