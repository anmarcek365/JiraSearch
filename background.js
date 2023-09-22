chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
		var regex = new RegExp('^https?://www\\.google\\.com/search\\?.*q=([a-zA-Z0-9]+-[0-9]+)&.*$');
		if(!regex.test(details.url)) {
			return {cancel: false};
		} else {
			var issueKey = details.url.match(regex)[1];
			return {redirectUrl: 'https://jira.pabk.sk/jira/browse/' + issueKey};
		}
    },
    {
        urls: [
            "*://*.google.com/*"
        ],
        types: ["main_frame"]
    },
    ["blocking"]
);