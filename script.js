// https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window
// When clicked on a button, this function open a link in a new tab.

function OpenInNewTab(url) {
    window.open(url, '_blank').focus();
  }