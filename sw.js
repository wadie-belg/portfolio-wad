/**
 * Service Worker — Cache-First Offline Support
 * Portfolio Wadie Belgacem
 * 
 * Strategy: Cache-first for static assets, Network-first for API calls.
 * Caches all local files (HTML, CSS, JS, JSON, SVG, PDF).
 * CDN resources (GSAP, Three.js, Google Fonts) handled by CDN caching.
 */

const CACHE_NAME = 'portfolio-wadie-v2';
const STATIC_ASSETS = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './three-init.js',
    './favicon.svg',
    './data/lang/ar.json',
    './data/lang/en.json',
    './assets/cv/wadie-belgacem-cv.pdf'
];

// Install: Cache all static assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => {
                console.log('[SW] All assets cached');
                return self.skipWaiting();
            })
            .catch((err) => {
                console.error('[SW] Cache failed:', err);
            })
    );
});

// Activate: Clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => {
                        console.log('[SW] Deleting old cache:', name);
                        return caches.delete(name);
                    })
            );
        }).then(() => {
            console.log('[SW] Activated, old caches cleaned');
            return self.clients.claim();
        })
    );
});

// Fetch: Cache-first strategy
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    // Skip chrome-extension and other non-http(s) requests
    if (!event.request.url.startsWith('http://') && !event.request.url.startsWith('https://')) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Cache hit — return it
                if (cachedResponse) {
                    console.log('[SW] Serving from cache:', event.request.url);
                    return cachedResponse;
                }

                // Cache miss — fetch from network
                console.log('[SW] Fetching from network:', event.request.url);
                return fetch(event.request)
                    .then((response) => {
                        // Check for valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clone the response and cache it
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    })
                    .catch((err) => {
                        console.warn('[SW] Network fetch failed:', event.request.url);
                        // Return a fallback for navigation requests
                        if (event.request.destination === 'document') {
                            return caches.match('./index.html');
                        }
                        throw err;
                    });
            })
    );
});

// Handle messages from the page
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
