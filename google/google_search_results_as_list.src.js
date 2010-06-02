javascript:(function(){
/**
 * Browser bookmarklet to display Google search results as ordered list of URLs.
 * @author Ramiro Gómez http://www.ramiro.org/
 */
var BM = {
  'run': function() {
    var ol = document.createElement('ol');
    var res = document.getElementById('ires');
    jQuery(res).find('li.g a.l').each(function(i,v){
      ol.appendChild(BM.getLi(v));
    });
    res.innerHTML='';
    res.appendChild(ol);
    BM.style();
  },
  'getLi': function(e) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.innerHTML = a.href = e.href;
    li.appendChild(a);
    return li;
  },
  'style': function() {
    var s = document.createElement('style');
    s.type = 'text/css';
    s.innerHTML = 'ol li{list-style-type:decimal;margin:5px 0 5px 30px;}';
    document.getElementsByTagName('head')[0].appendChild(s);
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