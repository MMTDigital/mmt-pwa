const applicationServerPublicKey = 'BBQbFed_Nv1Jv1ZsWNbeqqQT2ttt_HFgpBZ5wi4hCfJZMVx2fLa0el-LI_NP_UdugMUDLOfzTOqJU_nxXj0-U1g';
let isSubscribed = false;
let swRegistration = null;

const registerWorker = () => {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('Service Worker and Push is supported');
  
    navigator.serviceWorker.register('sw.js')
    .then(function(swReg) {
      console.log('Service Worker is registered', swReg);
      
      swRegistration = swReg;
      // Commented out and moved to Component for time being as sporadic on mobile and required multiple refreshes of page
      // subscribeUser();
    })
    .catch(function(error) {
      console.error('Service Worker Error', error);
    });
  } else {
    console.warn('Push messaging is not supported');
  }
}

const urlB64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const subscribeUser = () => {
  console.log("running subscribe user");
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  swRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: applicationServerKey
  })
  .then(function(subscription) {
    console.log('User is subscribed.');
    updateSubscriptionOnServer(subscription);
  })
  .catch(function(err) {
    console.log('Failed to subscribe the user: ', err);
  });
}

const updateSubscriptionOnServer = (subscription) => {
  console.log(JSON.stringify(subscription));
}
export { registerWorker, swRegistration, subscribeUser, isSubscribed }