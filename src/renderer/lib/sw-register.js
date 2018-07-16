/* eslint-disable no-console */
import settings from '@/lib/settings';

if (settings.serviceWorker.enable && 'serviceWorker' in navigator) {
  console.log('Registering ServiceWorker');
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').then((registration) => {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
      navigator.serviceWorker.ready.then((registration) => {
        registration.active.postMessage({ settings });
      });
    }, (err) => {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
  // if already installed, don't wait and send settings straight away
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({ settings });
  }
}
