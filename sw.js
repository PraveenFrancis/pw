self.addEventListener('push', function(e) {
   const options = {}
   e.waitUntil(self.registration.showNotification('Hello workd!', options))
});