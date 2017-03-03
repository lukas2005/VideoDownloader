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
	if (window.location.href.indexOf("youtube") != -1) {
	
		youtube();
		
	} else if (window.location.href.indexOf("cda") != -1) {
		
		cda();
		
	} else {
		
		alert('Unknown site please report this to me at lukas2005.38@gmail.com please make the title "VideoDownloader Issuse: ' + window.location.href + '" thank you for mailing me');
		
	}
}

function insert(string, idx, rem, str) {
    return string.slice(0, idx) + str + string.slice(idx + Math.abs(rem));
};

function youtube() {
	
	window.location.href = "http://keepvid.com/?url=" + window.location.href;
	
	alert("Note: keepvid.com is not my website");
	
}

function cda() {
	
	var url = insert(window.location.href, window.location.href.indexOf("cda")+3, 0, "x")
	
	window.location.href = url;
	
	alert("Note: cdax.pl is not my website");
	
}