import React from 'react';
import classNames from "classnames";

import Bear from "./Bear";
import Calculator from "./Calculator";

function App() {
  //Manually trigger install
  // const handleAppInstall = async () => {
  //   // console.log('👍', 'butInstall-clicked');
  //   const windowObject: any = window;
  //   const promptEvent = windowObject.deferredPrompt;
  //   if (!promptEvent) {
  //     // The deferred prompt isn't available.
  //     return;
  //   }
  //   // Show the install prompt.
  //   promptEvent.prompt();
  //   // Log the result
  //   const result = await promptEvent.userChoice;
  //   // console.log('👍', 'userChoice', result);
  //   // Reset the deferred prompt variable, since
  //   // prompt() can only be called once.
  //   windowObject.deferredPrompt = null;
  //   // Hide the install button.
  //   // divInstall.classList.toggle('hidden', true);
  // }

  return (
    <div className="App">
      <Bear />
      <Calculator />
    </div>
  );
}

export default App;