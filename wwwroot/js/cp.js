; (function () {

    function create(node, html, styles) {
        node = document.createElement(node);
        return node;
    }

    function extend(source, target) {
        for (var key in target) {
            if (target.hasOwnProperty(key)) {
                source[key] = target[key];
            }
        }
        return source;
    }

})();