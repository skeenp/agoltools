/**
 * Loader function to initiate action after AGOL page has loaded
 * @param {function} action action to carry out after loading
 * @param {int} timeout timeout duration for load detection
 */
function setupLoader(action, timeout = 30000) {
    // Add console call
    console.log('agoltools ext: Waiting for item to load')
    //Setup timeout for loader
    const loaderTimeout = setTimeout(function () {
        // Check of loader still exists
        if (loaderCheck === null) {
            // Clear loader
            clearInterval(loaderCheck);
            loaderCheck = null
            // Add console call 
            console.log('agoltools ext: Timeout waiting for page to load');
        }
    }, timeout);
    // Setup an interval function to wait until the page is loaded
    var loaderCheck = setInterval(function () {
        // Cheak load status via the removal of the 'is-active' tag from the div designated as 'js-page-loader' 
        if (!(document.querySelector(".js-page-loader").classList.contains("is-active"))) {
            //Clear the interval
            clearInterval(loaderCheck);
            loaderCheck = null
            // Add console call 
            console.log('agoltools ext: Page loaded');
            //Init the script after a second
            setTimeout(function(){action()}, 1000);;
        }
    }, 500);
}
/**
 * Coverts a HTML string to and element
 * @param {String} HTML representing a single element
 * @return {Element}
 */
 function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

/**
 * Handler for buttons (or other items) to open a URL as if it were an 'a' tag
 * @param {string} url url to open
 */
function openInNewTab(url) {
    window.open(url, '_blank').focus();
}