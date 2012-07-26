var serviceUri = "http://localhost:56146/data.txt"

function loadcssfile(filename) {
	
		var fileref = document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", filename)
		if (typeof fileref != "undefined")
			document.getElementsByTagName("head")[0].appendChild(fileref)
}

function loadjsfile(filename) {
		var fileref = document.createElement('script')
		fileref.setAttribute("type", "text/javascript")
		fileref.setAttribute("src", filename)
		if (typeof fileref != "undefined")
			document.getElementsByTagName("head")[0].appendChild(fileref)
}

// In the header of your page, paste the following for Kendo UI Mobile styles
loadcssfile("styles/kendo.mobile.all.min.css");

loadjsfile("cordova-1.8.0.js");
loadjsfile("js/kendo.mobile.min.js");
//loadjsfile("js/kendo.all.min.js");

function onDeviceReady() {
	if (masterPage) {
		$.get(masterPage, function (template) {
			$("body").append(template);
		})
	}

}

function ready(action) {
	$(document).ready(action);	
}

ready(onDeviceReady);