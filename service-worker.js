self.addEventListener("install", function (event) {
	event.waitUntil(
		caches.open("qr-generator-cache").then(function (cache) {
			return cache.addAll([
				"/",
				"/index.html",
				"/build.css",
				"/assets/favicon.ico",
				"/assets/android-chrome-192x192.png",
				"/assets/android-chrome-512x512.png",
				"/script.js",
				"/manifest.json",
			]);
		})
	);
});

self.addEventListener("fetch", function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			return response || fetch(event.request);
		})
	);
});
