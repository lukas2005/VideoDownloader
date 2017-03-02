(function(){
	
	var bookmarkletId = "videodownloader";
	
	var bookmarkletUrl = "https://rawgit.com/lukas2005/VideoDownloader/master/src/main.js";
	
	if (document.getElementById(bookmarkletId) == null) {

		insert();
	
	} else {
		
		remove();
		insert();
		
	}
	
	function insert() {
		
		var jsCode = document.createElement("script"); 
		jsCode.setAttribute("src", bookmarkletUrl); 
		jsCode.id = bookmarkletId;
		document.body.appendChild(jsCode);
		
	}
	
	function remove() {
		
		var jsCode = document.getElementById(bookmarkletId);
		jsCode.parentNode.removeChild(jsCode);
		
	}
	
})()