const template = `
const enableCache = false;
const CACHE_NAME = 'MMT-v1'
console.info('In offline')

self.addEventListener('install', event => {
  console.info('Installed')
  if (enableCache) {
    event.waitUntil(
      self.caches.open(CACHE_NAME)
        .then(cache => (
          fetch('/assets/manifest.json')
            .then(response => response.json())
            .then(assets =>
              cache.addAll([
                '/',
                '/assets/bundle.js',
                '/assets/styles.css'
              ])
            )
          )
        )
        .then(() => self.skipWaiting())
        .catch(console.warn)
    )
  }
})

self.addEventListener('fetch', (event) => {
  console.log('Fetch')
  if (enableCache) {
    event.respondWith(
      self.caches
        .match(event.request)
        .then((response) => (response || fetch(event.request)))
        .catch(e => {
          console.error('Error on the cache', e)
        })
    )
  }

})

self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(keyList =>
        Promise.all(keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            console.log('Deleting cache: ' + key)
            return caches.delete(key);
          }
        }))
      )
  );
});

self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.')
  console.log('[Service Worker] Push had this data: ')

  const title = 'Push MMT PWA'
  const options = {
    body: 'Message: Hello World',
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

  const notificationPromise = self.registration.showNotification(title, options)
  event.waitUntil(notificationPromise)
})
`

export default template
