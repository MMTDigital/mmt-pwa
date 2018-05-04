const template = `
const CACHE_NAME = 'v1'
console.info('In offline')

self.addEventListener('install', event => {
  console.info('Installed')

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
})

self.addEventListener('fetch', (event) => {
  console.log('Fetch')

  event.respondWith(
    self.caches
      .match(event.request)
      .then((response) => (response || fetch(event.request)))
      .catch(e => {
        console.error('Error on the cache', e)
      })
  )
})

self.addEventListener('activate', event => {
  console.log('Actrivate')
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    self.caches.keys()
      .then(keyList =>
        Promise.all(keyList.map(key => {
            if (!cacheWhitelist.includes(key)) {
              return self.caches.delete(key)
            }
        }))
      )
      .then(() => self.clients.claim())
  )
})

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
