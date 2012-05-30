javascript: (function() {
if ('undefined'==typeof jQuery) {
    script = document.createElement( 'script' );
    script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';
    script.onload=tableCount;
    document.body.appendChild(script);
}
else {
    tableCount();
}
function tableCount() {
    $('table').each(function(a,b){console.log(a,b);});
}
})();
