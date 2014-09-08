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
            're': new RegExp('\\belectric\\b','gmi'),
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
        }
    ];

    function walkTextNodes(node, callback) {
        var nextNode, n;

        if ('undefined' === typeof node.nodeName)
            return;

        n = node.nodeName.toLowerCase();
        if (-1 !== ['script', 'style'].indexOf(n))
            return;

        if (node.nodeType === Node.ELEMENT_NODE) {
            if (node = node.firstChild) {
                do {
                    nextNode = node.nextSibling;
                    walkTextNodes(node, callback);
                } while(node = nextNode);
            }
        }
        else if (node.nodeType === Node.TEXT_NODE) {
            node.data = callback(node.data);
        }
    }

    function applySubsts(s) {
        if (typeof s === 'undefined') {
            return;
        }
        for (i in substs) {
            o = substs[i];
            s = s.replace(o.re, o.subst);
        }
        return s;
    }

    document.title = applySubsts(document.title);
    walkTextNodes(document.body, applySubsts);
})();