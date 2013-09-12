//Simple.js
//Simplified JavaScript for Wikia stuff

/*
@Makes it easy for beginners to make buttons
@param text: button to appear on text
@param location: ID of element to append to
@called by: button("Hello World!", "WikiaRail");
*/
function button(text, location) {
    $('#' + location).append('<a class="wikia-button" id="' + text + '">' + text + '</a>');
}

/*
@Makes click handlers simple
@param id: ID of element to attatch handler
@param callback: Name of function to execute when clicked
@called by: click("lolrus", "fun");
*/
function click(id, callback) {
    $('#' + id).click(callback);
}
