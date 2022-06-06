/**
 * Script to inject a link into an agol item to ago assistant
 * 
 * @author Paul Skeen <plesk@bigpond.com>
 * @license 
 */

// Add console call
console.log('agolassist2 extention: Waiting for item to load')

// Setup an interval function to wait until the page is loaded
var loadedCheck = setInterval(function() {
    // Cheak load status via the removal of the 'is-active' tag from the div designated as 'js-page-loader' 
   if (!($(".js-page-loader").hasClass("is-active"))) {
       //Init the script
       init_addagabtn();
       //Clear the interval
       clearInterval(loadedCheck);
   }
}, 500);

/**
 * Init the add AGOL Assist Button
 */
function init_addagabtn() {
    // Parse item id
    var id = new URLSearchParams(window.location.search).get('id');
    // Get metadata button
    var mb = "button[data-action='editMetadata']"
    // Build new buttons
    var nb = `<a target='_blank' href='https://assistant.esri-ps.com/item/${ id }/json/data?queryScope=USER' class='trailer-half btn btn-fill btn-green text-ellipsis'>Open in AGO Assistant</a>`
    // Add button after metadata button
    $(mb).after(nb)
    // Add console call
    console.log('agolassist2 extention: AGOL Assistant Button Added')
}

