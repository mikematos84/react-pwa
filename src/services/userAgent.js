const userAgent = window.navigator.userAgent.toLowerCase();
const vendor = window.navigator.vendor.toLocaleLowerCase();

// Detects if device is on iOS 
const isIos = () => {
  return /iphone|ipad|ipod/.test(userAgent);
}

// Detects if device is on Android
const isAndroid = () => {
  return /android/.test(userAgent);
}

// Detects if browser is Safari
const isSafari = () => {
  return /apple/.test(vendor);
}

// Detects if browser is Chrome
const isChrome = () => {
  return /google/.test(vendor);
}

// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

export {
  userAgent,
  vendor,
  isIos,
  isAndroid,
  isInStandaloneMode,
  isSafari,
  isChrome,
}