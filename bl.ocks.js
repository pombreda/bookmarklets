javascript:(function(){
    document.location='http://bl.ocks.org/' + document.location.href.split('/').reverse()[0];
}());