import React, { useEffect, useState } from 'react';

const AppInstall = props => {

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can install the PWA
      setShowInstallPrompt(true);
    });

    window.addEventListener('appinstalled', (e) => {
      console.log('a2hs installed');
    });

  }, []);

  const installApp = () => {
    // Hide the app provided install promotion
    setShowInstallPrompt(false);
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
    })
  }

  return (
    showInstallPrompt &&
    <div className="AppInstall">
      <div>Customer App Installer React PWA <button onClick={installApp}>Install</button></div>
    </div>
  );
}

export const withAppInstall = Component => {
  return () => (
    <React.Fragment>
      <AppInstall />
      <Component />
    </React.Fragment>
  )
}

export default AppInstall;