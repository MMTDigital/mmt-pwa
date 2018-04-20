const CACHE_NAME = 'v1'

if (typeof window !== 'undefined' && typeof caches !== 'undefined') {
  window.addEventListener('install', event => {
    console.info('Installed')

    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache =>
          fetch('/dist/pwa-manifest.json')
              .then(response => response.json())
              .then(assets =>
                cache.addAll([
                  '/',
                  assets['main.js'],
                  assets['vendor.js']
                ])
              )
          )
        .then(() => window.skipWaiting())
        .catch(console.warn)
    )
  })

  window.addEventListener('fetch', (event) => {
    console.log('Fetch')

    event.respondWith(
      caches
        .match(event.request)
        .then((response) => (response || fetch(event.request)))
        .catch(e => {
          console.error('Error on the cache', e)
        })
    )
  })

  window.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME]
    event.waitUntil(
      caches.keys()
        .then(keyList =>
          Promise.all(keyList.map(key => {
              if (!cacheWhitelist.includes(key)) {
                return caches.delete(key)
              }
          }))
        )
        .then(() => window.clients.claim())
    )
  })
}
