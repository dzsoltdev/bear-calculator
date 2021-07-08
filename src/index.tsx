import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

window.addEventListener('beforeinstallprompt', (event) => {
  const windowObject: any = window;
  // console.log('👍', 'beforeinstallprompt', event);
  // Stash the event so it can be triggered later.
  windowObject.deferredPrompt = event;
  // Remove the 'hidden' class from the install button container
  // divInstall.classList.toggle('hidden', false);
});

window.addEventListener('appinstalled', (event) => {
  const windowObject: any = window;
  // console.log('👍', 'appinstalled', event);
  // Clear the deferredPrompt so it can be garbage collected
  windowObject.deferredPrompt = null;
});