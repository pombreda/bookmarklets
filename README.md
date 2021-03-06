# Various Browser Bookmarklets

To add one of the bookmarklets to your browser, create a new bookmark (CTRL+D) and replace the URL string with the appropriate JavaScript snippet from below. Alternatively you can use a tool such as [YUI Compressor](https://developer.yahoo.com/yui/compressor/) to remove comments and compress the JS code.

## Known Issues

bl.ocks.js doesn't work in Firefox, vote for this [Firefox bug](https://bugzilla.mozilla.org/show_bug.cgi?id=866522) to change this, [more info here](https://support.mozilla.org/en-US/questions/970761).

## Bookmarklet Code (Not tested in IE)

### go2urlwithoutsearch.js
    javascript:(function(){document.location.href=document.location.href.replace(document.location.search,"")}());

### image-dl.js
    javascript:(function(){window.open(document.querySelector('meta[property="og:image"]').content)}());

### extracthrefs.js
    javascript:(function(){if("undefined"==typeof jQuery){script=document.createElement("script");script.src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js";script.onload=a;document.body.appendChild(script)}else{a()}function a(){$("a").each(function(){document.write($(this).attr("href")+"<br>")})}})();

### bl.ocks.js
    javascript:(function(){document.location="http://bl.ocks.org/"+document.location.href.split("/").reverse()[0]}());

### bookmark.js
    javascript:(function(){var b=document.location.href;var a=document.querySelector('link[rel="canonical"]');if(a){b=a.getAttribute("href")||b}document.location="http://notebux.com/bookmarks/add/?url="+encodeURIComponent(b)}());

### rich_snippets_test.js
    javascript:void (window.open("http://www.google.com/webmasters/tools/richsnippets?url="+encodeURIComponent(window.location.href),"_blank"));

### google_cache.js
    javascript:location.href="http://www.google.com/search?q=cache:"+encodeURIComponent(location.href);

### highlight_layout.js
    javascript:(function(){var a=document.createElement("style");a.type="text/css";a.innerHTML="* { background-color: rgba(255,0,0,.2); } * * { background-color: rgba(0,255,0,.2); } * * * { background-color: rgba(0,0,255,.2); } * * * * { background-color: rgba(255,0,255,.2); } * * * * * { background-color: rgba(0,255,255,.2); } * * * * * * { background-color: rgba(255,255,0,.2); };";document.body.appendChild(a)}());

### highlight_text_with_numbers.js
    javascript:(function(){var c=/\d/gi;function b(e,g){var d,f;if("undefined"===typeof e.nodeName){return}f=e.nodeName.toLowerCase();if(-1!==["script","style"].indexOf(f)){return}if(e.nodeType===Node.ELEMENT_NODE){if(e=e.firstChild){do{d=e.nextSibling;b(e,g)}while(e=d)}}else{if(e.nodeType===Node.TEXT_NODE){g(e)}}}function a(e){s=e.data;if(typeof s==="undefined"){return}if(s.match(c)){var d=document.createElement("span");d.setAttribute("style","background:yellow");d.textContent=s;e.parentNode.replaceChild(d,e)}}b(document.body,a)})();

### substitutions_xkcd1288.js
    javascript:(function(){var c=[{re:new RegExp("\\bwitnesses\\b","gmi"),subst:"these dudes I know"},{re:new RegExp("\\ballegedly\\b","gmi"),subst:"kinda probably"},{re:new RegExp("\\bnew\\s+study\\b","gmi"),subst:"Tumblr post"},{re:new RegExp("\\brebuild\\b","gmi"),subst:"avenge"},{re:new RegExp("\\bspace\\b","gmi"),subst:"spaaace"},{re:new RegExp("\\bgoogle\\s+glass\\b","gmi"),subst:"virtual boy"},{re:new RegExp("\\bsmartphone\\b","gmi"),subst:"Pokédex"},{re:new RegExp("\\belectric\\b","gmi"),subst:"atomic"},{re:new RegExp("\\bsenator\\b","gmi"),subst:"elf-lord"},{re:new RegExp("\\bcar\\b","gmi"),subst:"cat"},{re:new RegExp("\\belection\\b","gmi"),subst:"eating contest"},{re:new RegExp("\\bcongressional\\s+leaders\\b","gmi"),subst:"river spirits"},{re:new RegExp("\\bhomeland\\s+security\\b","gmi"),subst:"homestar runner"},{re:new RegExp("\\bcould\\s+not\\s+be\\s+reached\\s+for\\s+comment\\b","gmi"),subst:"is guilty and everyone knows it."}];function a(e,g){var d,f;if("undefined"===typeof e.nodeName){return}f=e.nodeName.toLowerCase();if(-1!==["script","style"].indexOf(f)){return}if(e.nodeType===Node.ELEMENT_NODE){if(e=e.firstChild){do{d=e.nextSibling;a(e,g)}while(e=d)}}else{if(e.nodeType===Node.TEXT_NODE){e.data=g(e.data)}}}function b(d){if(typeof d==="undefined"){return}for(i in c){o=c[i];d=d.replace(o.re,o.subst)}return d}document.title=b(document.title);a(document.body,b)})();

### substitutions_xkcd1418.js
    javascript:(function(){var c=[{re:new RegExp("\\bforce\\b","gmi"),subst:"horse"},{re:new RegExp("\\bforces\\b","gmi"),subst:"horses"}];function a(e,g){var d,f;if("undefined"===typeof e.nodeName){return}f=e.nodeName.toLowerCase();if(-1!==["script","style"].indexOf(f)){return}if(e.nodeType===Node.ELEMENT_NODE){if(e=e.firstChild){do{d=e.nextSibling;a(e,g)}while(e=d)}}else{if(e.nodeType===Node.TEXT_NODE){e.data=g(e.data)}}}function b(d){if(typeof d==="undefined"){return}for(i in c){o=c[i];d=d.replace(o.re,o.subst)}return d}document.title=b(document.title);a(document.body,b)})();

### wikitables.js
    javascript:(function(){document.location="http://wikitables.geeksta.net/url/?url="+encodeURIComponent(document.location.href)}());

### tables2csv.js
    javascript:(function(){if("undefined"==typeof jQuery){script=document.createElement("script");script.src="http://code.jquery.com/jquery-1.8.3.min.js";script.onload=a;document.body.appendChild(script)}else{a()}function a(){$("table").each(function(){var b=$(this);$("<div/>").css("border",b.css("border")).css("width",b.width()).html($.map(b.find("tr"),function(c){return $.map($(c).find("th, td"),function(d){return'"'+$(d).text().trim().replace('"','""')+'"'}).join(",")}).join("<br>")).insertAfter(b)})}})();

### tablecount.js
    javascript:(function(){if("undefined"==typeof jQuery){script=document.createElement("script");script.src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js";script.onload=a;document.body.appendChild(script)}else{a()}function a(){$("table").each(function(d,c){console.log(d,c)})}})();

### uncheckall.js
    javascript:(function(){var a=document.querySelectorAll("input[type=checkbox]");for(var b in a){a[b].checked=false}}());

### export2list.js
    var list="";$("dl dt").each(function(b,d){var c=$(d).find("a");list+='<li><a href="'+c.attr("href")+'">'+c.text()+"</a></li>\n"});console.log("<ul>"+list+"</ul>");

### flashvideodownloader.js
    javascript:(function(){document.location="http://www.flashvideodownloader.org/download2.php?u="+encodeURIComponent(document.location.href)}());
