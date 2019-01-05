(function() {
  'use strict';

 
  // TODO add service worker code here
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('/uss/service-worker.js', {scope: '/uss/'}) 
             .then(function() {     console.log('Registration succeeded. Scope is ' + reg.scope);
            })
            .catch(function(err) {
              console.log('ServiceWorker registration failed: ', err);
              });
  }
})();
