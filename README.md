# Various Browser Bookmarklets

To add one of the bookmarklets to your browser, create a new bookmark (CTRL+D) and replace the URL string with the appropriate JavaScript snippet from below. Alternatively you can use a tool such as [YUI Compressor](https://developer.yahoo.com/yui/compressor/) to remove comments and compress the JS code.

## Bookmarklet Code (tested in Google Chrome)

### extracthrefs.js
`javascript:(function(){if("undefined"==typeof jQuery){script=document.createElement("script");script.src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js";script.onload=a;document.body.appendChild(script)}else{a()}function a(){$("a").each(function(){document.write($(this).attr("href")+"<br>")})}})();`

### go2urlwithoutsearch.js
`javascript:(function(){document.location.href=document.location.href.replace(document.location.search,"")}());`

### google_search_results_as_list.src.js
`javascript:(function(){var b={run:function(){var c=document.createElement("ol");var d=document.getElementById("center_col");jQuery(d).find("ol li.g a.l").each(function(f,e){c.appendChild(b.getLi(e))});d.innerHTML="";d.appendChild(c);b.style()},getLi:function(f){var c=document.createElement("li");var d=document.createElement("a");d.innerHTML=d.href=f.href;c.appendChild(d);return c},style:function(){var c=document.createElement("style");c.type="text/css";c.innerHTML="ol li{list-style-type:decimal;margin:5px 0 5px 30px;}";document.getElementsByTagName("head")[0].appendChild(c)}};if("undefined"==typeof jQuery){var a=document.createElement("script");a.type="text/javascript";a.onload=b.run;a.src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";document.body.appendChild(a)}else{b.run()}}());`

### google_search_results_as_csv.src.js
`javascript:(function(){var b={re_escape_csv:new RegExp("[\\\"']","g"),run:function(){var c="";jQuery("ol li.g a.l").each(function(e,d){c+=b.csvField(d.href)+","+b.csvField(d.innerHTML)+"\n"});window.location="data:text/csv;charset=utf8,"+encodeURIComponent(c);return true},csvField:function(c){return'"'+(c+"").replace(b.re_escape_csv,"\\$&").replace(/\u0000/g,"\\0")+'"'}};if("undefined"==typeof jQuery){var a=document.createElement("script");a.type="text/javascript";a.onload=b.run;a.src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";document.body.appendChild(a)}else{b.run()}}());`

### export2list.js
`var list="";$("dl dt").each(function(b,d){var c=$(d).find("a");list+='<li><a href="'+c.attr("href")+'">'+c.text()+"</a></li>\n"});console.log("<ul>"+list+"</ul>");`

### flashvideodownloader.js
`javascript:(function(){document.location="http://www.flashvideodownloader.org/download2.php?u="+encodeURIComponent(document.location.href)}());`

### tablecount.js
`javascript:(function(){if("undefined"==typeof jQuery){script=document.createElement("script");script.src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js";script.onload=a;document.body.appendChild(script)}else{a()}function a(){$("table").each(function(d,c){console.log(d,c)})}})();`

### tables2csv.js
`javascript:(function(){if("undefined"==typeof jQuery){script=document.createElement("script");script.src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js";script.onload=a;document.body.appendChild(script)}else{a()}function a(){$("table").each(function(){var b=$(this);$("<div/>").css("border",b.css("border")).css("width",b.width()).html($.map(b.find("tr"),function(c){return $.map($(c).find("th, td"),function(d){return'"'+$(d).text().trim().replace('"','""')+'"'}).join(",")}).join("<br>")).insertAfter(b)})}})();`

