var serviceUri = "https://c9.io/jkohnen/tracker/workspace/source/Tracker.Web/data.txt";

function loadcssfile(filename) {
	
		var fileref = document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", filename);
		if (typeof fileref != "undefined")
        {
			document.getElementsByTagName("head")[0].appendChild(fileref);
        }
}

function loadjsfile(filename) {
		var fileref = document.createElement('script');
		fileref.setAttribute("type", "text/javascript");
		fileref.setAttribute("src", filename);
		if (typeof fileref != "undefined")
        {
			document.getElementsByTagName("head")[0].appendChild(fileref);
        }
}

loadcssfile("styles/kendo.mobile.all.min.css");
loadjsfile("cordova-1.8.0.js");
loadjsfile("js/kendo.mobile.min.js");

function onDeviceReady() {
//    var masterPage = $('html').data('masterpage');
//    if (masterPage) {
//    	$.get(masterPage, function (template) {
//			$("body").append(template);
//			});

//    	loadjsfile(masterPage);

//		$.ajax({
//			url: masterPage,
//			dataType: "html",
//			success : function (template) {
//					$("body").append(template);
//				}	 
//			});
//	}

}

function ready(action) {
	$(document).ready(action);	
}

ready(onDeviceReady);