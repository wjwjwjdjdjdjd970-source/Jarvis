var C="jarvis-duz-9ab03364",F=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}));self.clients.claim()});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET"||new URL(e.request.url).origin!==location.origin)return;e.respondWith(fetch(e.request).then(function(r){var cp=r.clone();caches.open(C).then(function(c){c.put(e.request,cp)});return r}).catch(function(){return caches.match(e.request)}))});
