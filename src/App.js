import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPromotion, setShowInstallPromotion] = useState(false);

  useEffect(() => {

    window.addEventListener('beforeinstallprompt', (e) => {
      console.log("beforeinstallprompt")
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can install the PWA
      setShowInstallPromotion(true);
    });

    window.addEventListener('appinstalled', (evt) => {
      console.log('a2hs installed');
    });

  }, []);

  const installApp = () => {
    // Hide the app provided install promotion
    setShowInstallPromotion(false);
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
    <div className="App">
      {
        showInstallPromotion &&
        <div>
          <button onClick={installApp}>Install</button>
        </div>
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit<code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
