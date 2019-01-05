(function() {
  'use strict';

  var headers = new Headers();
// *** I set the header in order to solve the error above:
// *** The value is set to "/" because this js is included in html file in upper folder.
// *** I tried even "../" and many more others values...
headers.append('Service-Worker-Allowed', '/');
  
console.log(headers.get('Service-Worker-Allowed'));
  // TODO add service worker code here
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
})();
