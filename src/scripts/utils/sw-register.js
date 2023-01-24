import * as WorkBoxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.error('Service Worker not supported in the browser');
    return;
  }

  const wb = new WorkBoxWindow.Workbox('./sw.js');

  try {
    await wb.register();
    navigator.serviceWorker.register('./sw.js');
    console.log('Service Worker registered');
  } catch (error) {
    console.error('Failed to register service workder', error);
  }
};

export default swRegister;
