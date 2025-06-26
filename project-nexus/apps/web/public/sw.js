// Service Worker for push notifications
self.addEventListener('push', function(event) {
  const payload = event.data ? event.data.json() : {};
  const options = {
    body: payload.message,
    icon: '/icon.png',
    badge: '/badge.png'
  };

  event.waitUntil(
    self.registration.showNotification('Achievement Unlocked', options)
  );
});