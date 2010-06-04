javascript:(function(){
/**
 * Browser bookmarklet to display Google search results as CSV.
 * @author Ramiro Gómez http://www.ramiro.org/
 * @see http://stackoverflow.com/questions/921037/jquery-table-to-csv-export
 */
var BM = {
  're_escape_csv': new RegExp('[\\"\']', 'g'),
  'run': function() {
    var csv = '';
    jQuery('ol li.g a.l').each(function(i,v){
      csv += BM.csvField(v.href)+','+BM.csvField(v.innerHTML)+"\n";
    });
    window.location='data:text/csv;charset=utf8,' + encodeURIComponent(csv);
    return true;
  },
  'csvField': function(str) {
    return '"'+(str+'').replace(BM.re_escape_csv, '\\$&').replace(/\u0000/g, '\\0')+'"';
  }
};
if ('undefined'==typeof jQuery) {
  var jQ = document.createElement('script');
  jQ.type = 'text/javascript';
  jQ.onload=BM.run;
  jQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
  document.body.appendChild(jQ);
} else {
  BM.run();
}
}());