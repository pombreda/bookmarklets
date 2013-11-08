javascript: (function() {

    var substs = [
        {
            're': new RegExp('\\bwitnesses\\b','gmi'),
            'subst':'these dudes I know'
        },
        {
            're': new RegExp('\\ballegedly\\b','gmi'),
            'subst':'kinda probably'
        },
        {
            're': new RegExp('\\bnew\\s+study\\b','gmi'),
            'subst':'Tumblr post'
        },
        {
            're': new RegExp('\\brebuild\\b','gmi'),
            'subst':'avenge'
        },
        {
            're': new RegExp('\\bspace\\b','gmi'),
            'subst':'spaaace'
        },
        {
            're': new RegExp('\\bgoogle\\s+glass\\b','gmi'),
            'subst':'virtual boy'
        },
        {
            're': new RegExp('\\bsmartphone\\b','gmi'),
            'subst':'Pokédex'
        },
        {
            're': new RegExp('\\belextric\\b','gmi'),
            'subst':'atomic'
        },
        {
            're': new RegExp('\\bsenator\\b','gmi'),
            'subst':'elf-lord'
        },
        {
            're': new RegExp('\\bcar\\b','gmi'),
            'subst':'cat'
        },
        {
            're': new RegExp('\\belection\\b','gmi'),
            'subst':'eating contest'
        },
        {
            're': new RegExp('\\bcongressional\\s+leaders\\b','gmi'),
            'subst':'river spirits'
        },
        {
            're': new RegExp('\\bhomeland\\s+security\\b','gmi'),
            'subst':'homestar runner'
        },
        {
            're': new RegExp('\\bcould\\s+not\\s+be\\s+reached\\s+for\\s+comment\\b','gmi'),
            'subst':'is guilty and everyone knows it.'
        },
    ];

    script = document.createElement( 'script' );
    script.src = 'http://code.jquery.com/jquery-2.0.3.min.js';
    script.onload = substitute;
    document.body.appendChild(script);

    function substitute() {
        jQuery.fn.processTextNodes = function(callback) {
            jQuery(this).each(function(index, element) {
                if ('script' == element.nodeName || 'style' == element.nodeName)
                    return;
                if (element.nodeType == Node.TEXT_NODE) {
                    element.nodeValue = callback(element.nodeValue);
                } else if (element.hasChildNodes()) {
                    jQuery(element.childNodes).processTextNodes(callback);
                }
            });
        };
        $('title, body').processTextNodes(function(s) {
            if (typeof s === 'undefined') {
                return;
            }
            for (i in substs) {
                o = substs[i];
                s = s.replace(o.re, o.subst);
            }
            return s;
        });
    }
})();