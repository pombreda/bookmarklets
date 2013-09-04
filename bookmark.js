javascript:(function(){
    var url = document.location.href;
    var canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) url = canonical.getAttribute('href') || url;
    document.location='http://notebux.com/bookmarks/add/?url='+encodeURIComponent(url);
}());