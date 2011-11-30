var list = '';
$('dl dt').each(function(idx,elt){
  var a = $(elt).find('a');
  list += '<li><a href="' + a.attr('href') + '">' + a.text() + '</a></li>\n';
});
console.log('<ul>'+list+'</ul>');
