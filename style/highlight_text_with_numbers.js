javascript: (function() {

    var re_num = /\d/gi;

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
            callback(node);
        }
    }

    function highlight(node) {
        s = node.data;
        if (typeof s === 'undefined') {
            return;
        }
        if (s.match(re_num)) {
            var span = document.createElement('span');
            span.setAttribute('style', 'background:yellow');
            span.textContent = s;
            node.parentNode.replaceChild(span, node);
        }
    }

    walkTextNodes(document.body, highlight);
})();