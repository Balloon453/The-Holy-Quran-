const CACHE_NAME = "quran-app-cache-v1";
const urlsToCache = [
  "index.html",
  "styles.css",
  "app.js",
  "manifest.json",
  "assets/logo_optimized.png",
  "assets/icon-512_optimized.png",
  "assets/favicon_optimized.png"
];

// تثبيت الخدمة وتخزين الملفات
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// تفعيل الخدمة وحذف الكاش القديم
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});

// طلب الملفات من الكاش أولًا، ثم من الشبكة
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
