javascript: (function() {

    var substs = [
        {
            're': new RegExp('\\bforce\\b','gmi'),
            'subst':'horse'
        },
        {
            're': new RegExp('\\bforces\\b','gmi'),
            'subst':'horses'
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