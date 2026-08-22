/// <reference types="@sveltejs/kit" />

// Cache name
const CACHE = "lunarplanner-cache-v1";

// Files to cache
const ASSETS = [
  "/",
  "/manifest.json",
  "/icons/icon-32.png",
  "/icons/icon-128.png",
  "/icons/icon-256.png",
  "/icons/icon-512.png"
];

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request).catch(() => {
          // Optional: fallback for offline
          return cached;
        })
      );
    })
  );
});
