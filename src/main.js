// Helper vars
var totalLibs = 1;
var loadedLibs = 0;
var libInstance = null;

// Unique id of bookmarklet
var bookmarkletId = "videodownloader";

// Helper urls
var cdaxUrl = "https://cdax.pl/";
var keepvidUrl = "http://keepvid.com/?url=";

//Helper functions
function libLoaded() {
	
	loadedLibs++;
	
	libInstance.id = bookmarkletId + "_lib" + loadedLibs;
	
	if (loadedLibs == totalLibs) {
		
		start();
		
	}
	
}

String.prototype.contains = function(substring) {
	
	return this.indexOf(substring) != -1;
	
}

// Here things happen

// Loading libraries
if (!($ = window.jQuery)) {
	script = document.createElement("script");
	script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"; 
	script.onload = libLoaded;
	libInstance = script;
	document.body.appendChild(script);
} else {
	start()
}

// Actually start the whole thing
function start() {
	
	var url = window.location.href;
	
	if (url.contains("youtube") || url.contains("dailymotion") || url.contains("vimeo")) {
	
		keepvid(url);
		
	} else if (url.contains("cda")) {
		
		cdax(url);
		
	} else {
		
		alert('Unknown site please report this to me at lukas2005.38@gmail.com');
		
	}
}

// Downloading websites
function keepvid(url) {
	
	window.location.href = keepvidUrl + url;
	
	alert("Note: keepvid.com is not my website");
	
}

function cdax(url) {
	
	var urlArray = url.split("/");
	
	window.location.href = cdaxUrl + urlArray[3] + "/" + urlArray[4];
	
	alert("Note: cdax.pl is not my website");
	
}