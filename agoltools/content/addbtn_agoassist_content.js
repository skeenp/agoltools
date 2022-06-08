/**
 * Script to inject a link into an agol item to ago assistant
 * 
 * @author [Paul Skeen](https://github.com/skeenp)
 * 
 */

/**
 * Action to add AGOL Assistant links to folders
 */
function addbtn_agoassist_content_action_folders() {
    // Process all AGOL folder items
    document.querySelectorAll("a.folder-list-link").forEach(function (f) {
        // Get id from item link
        var id = f.getAttribute('data-id');
        var title = f.getAttribute('data-title');
        // Bypass if id and title are the same
        if (id !== title) {
            // Build button
            let btn = htmlToElement(`<button style='right:2.975rem' class=" tooltip tooltip-left btn-link right folder-list-action folder-list-action--green font-size--2 js-folder-list-aga" aria-label="Open in AGO Assistant" data-title="${title}" data-id="${id}" onclick="window.open('https://assistant.esri-ps.com/content?queryScope=USER&folder=${id}&num=20&start=1&sortField=modified&sortOrder=desc', '_blank').focus()">
            <svg class="icon-inline" aria-hidden="true" focusable="false" role="none" version="1.1" viewBox="0 0 16 16" width="16" height="16"><path d="m6.4 3.1v1.7h-4.1v9.1h9.1v-4.1h1.7v5a0.83 0.83 0 0 1-0.83 0.83h-11a0.83 0.83 0 0 1-0.83-0.83v-11a0.83 0.83 0 0 1 0.83-0.83zm9.1-2.5v6.6h-1.7v-3.8l-6.4 6.4-1.2-1.2 6.4-6.4h-3.8v-1.7z"/></svg>
              </a>`)
            // Add button after initial link
            f.after(btn)
        }
    });
    console.log('agoltools.addbtn_agoassist_content ext: AGOL Assistant button added to folders');
}

/**
 * Run init actions
 */
function addbtn_agoassist_content_action() {
    // Add AGOL assistant links to folders
    addbtn_agoassist_content_action_folders();
}

//Setup loader
setupLoader(addbtn_agoassist_content_action)
