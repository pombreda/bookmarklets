# Various Browser Bookmarklets

To add one of the bookmarklets to your browser, create a new bookmark (CTRL+D) and replace the URL string with the appropriate JavaScript snippet from below. Alternatively you can use a tool such as [YUI Compressor](https://developer.yahoo.com/yui/compressor/) to remove comments and compress the JS code.

## Bookmarklet Code (tested in Google Chrome)

### extracthrefs.js
	javascript:(function(){if("undefined"==typeof jQuery){script=document.createElement("script");script.src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js";script.onload=a;document.body.appendChild(script)}else{a()}function a(){$("a").each(function(){document.write($(this).attr("href")+"<br>")})}})();

### go2urlwithoutsearch.js
	javascript:(function(){document.location.href=document.location.href.replace(document.location.search,"")}());

### google_cache.js
	javascript:location.href="http://www.google.com/search?q=cache:"+encodeURIComponent(location.href);

### rich_snippets_test.js
	javascript:void (window.open("http://www.google.com/webmasters/tools/richsnippets?url="+encodeURIComponent(window.location.href),"_blank"));

### export2list.js
	var list="";$("dl dt").each(function(b,d){var c=$(d).find("a");list+='<li><a href="'+c.attr("href")+'">'+c.text()+"</a></li>\n"});console.log("<ul>"+list+"</ul>");

### flashvideodownloader.js
	javascript:(function(){document.location="http://www.flashvideodownloader.org/download2.php?u="+encodeURIComponent(document.location.href)}());

### tablecount.js
	javascript:(function(){if("undefined"==typeof jQuery){script=document.createElement("script");script.src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js";script.onload=a;document.body.appendChild(script)}else{a()}function a(){$("table").each(function(d,c){console.log(d,c)})}})();

### tables2csv.js
	javascript:(function(){if("undefined"==typeof jQuery){script=document.createElement("script");script.src="http://code.jquery.com/jquery-1.8.3.min.js";script.onload=a;document.body.appendChild(script)}else{a()}function a(){$("table").each(function(){var b=$(this);$("<div/>").css("border",b.css("border")).css("width",b.width()).html($.map(b.find("tr"),function(c){return $.map($(c).find("th, td"),function(d){return'"'+$(d).text().trim().replace('"','""')+'"'}).join(",")}).join("<br>")).insertAfter(b)})}})();

