/**
 * Script to inject helpful links into an agol items
 * 
 * @author [Paul Skeen](https://github.com/skeenp)
 * 
 */

/**
 * Action to add AGOL Assistant links to folders
 */
function addbtn_agoassist_item_action_addbutton() {
    // Parse item id
    var id = new URLSearchParams(window.location.search).get('id');
    // Get metadata button
    var mb = "button[data-action='editMetadata']"
    // Build new buttons
    var nb = htmlToElement(`<a target='_blank' href='https://assistant.esri-ps.com/item/${id}/json/data?queryScope=USER' class='trailer-half btn btn-fill btn-green text-ellipsis'>Open in AGO Assistant</a>`)
    // Add button after metadata button
    document.querySelector(mb).after(nb)
    // Add console call
    console.log('agoltools.addbtn_agoassist_items ext: AGO Assistant button added to item')
}

/**
 * Run init actions
 */
function addbtn_agoassist_item_action() {
    // Add AGOL Assistant Button
    addbtn_agoassist_item_action_addbutton()
}

//Setup loader
setupLoader(addbtn_agoassist_item_action)