console.log('Hi, form FPS')


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      console.log('Extension icon was clicked');
    }
  }
);
