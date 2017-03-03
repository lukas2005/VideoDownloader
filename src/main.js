var totalLibs = 1;
var loadedLibs = 0;

var libInstance = null;

var bookmarkletId = "videodownloader";

var cdaxUrl = "https://cdax.pl/";
var keepvidUrl = "http://keepvid.com/?url=";

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
	
	var url = window.location.href;
	
	if (url.indexOf("youtube") != -1) {
	
		keepvid(url);
		
	} else if (url.indexOf("cda") != -1) {
		
		cdax(url);
		
	} else {
		
		alert('Unknown site please report this to me at lukas2005.38@gmail.com');
		
	}
}

function keepvid(url) {
	
	window.location.href = keepvidUrl + url;
	
	alert("Note: keepvid.com is not my website");
	
}

function cdax(url) {
	
	var urlArray = url.split("/");
	
	window.location.href = cdaxUrl + urlArray[3] + "/" + urlArray[4];
	
	alert("Note: cdax.pl is not my website");
	
}