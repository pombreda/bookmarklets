javascript:(function(){
    var css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '* { background-color: rgba(255,0,0,.2); } * * { background-color: rgba(0,255,0,.2); } * * * { background-color: rgba(0,0,255,.2); } * * * * { background-color: rgba(255,0,255,.2); } * * * * * { background-color: rgba(0,255,255,.2); } * * * * * * { background-color: rgba(255,255,0,.2); };';
    document.body.appendChild(css);
}());