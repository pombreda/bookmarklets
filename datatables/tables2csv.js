javascript: (function() {
/*
generic HTML data table to CSV converter adapted from:
http://marklets.com/CSV+from+HTML+tables.aspx

The code below uses a comma instead of a semi-colon and automatically loads
jQuery if not already loaded.
*/
if ('undefined'==typeof jQuery) {
  script = document.createElement( 'script' );
  script.src = 'http://code.jquery.com/jquery-1.8.3.min.js';
  script.onload=tables2CSV;
  document.body.appendChild(script);
}
else {
  tables2CSV();
}

function tables2CSV() {
  $('table').each(function() {
    var $table = $(this);
    $('<div/>')
      .css('border', $table.css('border'))
      .css('width', $table.width())
      .html($.map($table.find('tr'), function(tr) {
        return $.map($(tr).find('th, td'), function(e) {
          return '"' + $(e).text().trim().replace('"', '""') + '"'
        }).join(',')
      }).join('<br>')).insertAfter($table);
  });
}

})();
