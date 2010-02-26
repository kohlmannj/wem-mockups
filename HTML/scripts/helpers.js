// Authored by Joe Kohlmann

$(document).ready(function() {
	searchBoxAddPlaceholderText("Search WEM");
});

function searchBoxAddPlaceholderText(placeholderText) {
	$("#searchBox").addClass("placeholder").attr("value", placeholderText).focus(function() {
		// On focus, clear the text field's value so that the user may type a search query.
		if ($(this).attr("value") == placeholderText) {
			$(this).removeClass("placeholder").attr("value", "");
		}
	}).blur(function() {
		// On blur, restore the placeholder text if the text field's value is empty.
		if ($(this).attr("value") == "") {
			$(this).addClass("placeholder").attr("value", placeholderText);
		}
	});
}