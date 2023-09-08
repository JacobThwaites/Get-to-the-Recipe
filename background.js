chrome.runtime.onMessage.addListener((message) => {
    if (message.classExists) {
      // console.log('The class exists on the webpage.');
    } else {
      // console.log('The class does not exist on the webpage.');
    }
  });