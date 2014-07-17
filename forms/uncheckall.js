javascript:(function(){
    var L = document.querySelectorAll('input[type=checkbox]');
    for (var i in L) {
        L[i].checked = false;
    }
}());