javascript: (function() {
// generic data table to csv converter
// http://net.tutsplus.com/tutorials/javascript-ajax/create-bookmarklets-the-right-way/
if ('undefined'==typeof jQuery) {
    script = document.createElement( 'script' );
    script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';
    script.onload=tables2CSV;
    document.body.appendChild(script);
}
else {
    tables2CSV();
}

// http://marklets.com/CSV+from+HTML+tables.aspx
function tables2CSV() {
   $('table').each(function() {
      var $table = $(this);
      $('<div/>')
        .css('border', $table.css('border'))
        .css('width', $table.width())
        .html($.map($table.find('tr'), function(tr) {
            return $.map($(tr).find('th, td'), function(e) {
                return '"' + $(e).text().replace('"', '""') + '"'
           }).join(',')
        }).join('<br>')).insertAfter($table);
   });
}

})();
