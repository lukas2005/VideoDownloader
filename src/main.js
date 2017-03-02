var totalLibs = 1;
var loadedLibs = 0;

var libInstance = null;

var bookmarkletId = "videodownloader";

function libLoaded() {
	
	loadedLibs++;
	
	libInstance.id = bookmarkletId + "_lib" + loadedLibs;
	
	if (loadedLibs == totalLibs) {
		
		start();
		
	}
	
}

if (!($ = window.jQuery)) {
	script = document.createElement("script");
	script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"; 
	script.onload = libLoaded;
	libInstance = script;
	document.body.appendChild(script);
} else {
	start()
}
 
function start() {
	alert(window.location.href);
	if (document.href) {
	
		
		
	}
}

function youtube() {
	
	
	
}