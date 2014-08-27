/*
 Add different background colors to elements based on depth in the DOM tree
 to highlight the layout of the page, based on:
 http://www.quora.com/Web-Development/What-are-the-most-interesting-HTML-JS-DOM-CSS-hacks-that-most-web-developers-dont-know-about/answer/Gajus-Kuizinas
*/
javascript:(function(){
    var css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '* { background-color: rgba(255,0,0,.2); } * * { background-color: rgba(0,255,0,.2); } * * * { background-color: rgba(0,0,255,.2); } * * * * { background-color: rgba(255,0,255,.2); } * * * * * { background-color: rgba(0,255,255,.2); } * * * * * * { background-color: rgba(255,255,0,.2); };';
    document.body.appendChild(css);
}());