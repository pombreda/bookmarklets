javascript: (function() {
if ('undefined'==typeof jQuery) {
    script = document.createElement( 'script' );
    script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';
    script.onload=extracthrefs;
    document.body.appendChild(script);
}
else {
    extracthrefs();
}
function extracthrefs() {
    $('a').each(function(){document.write($(this).attr('href')+'<br>');});
}
})();
