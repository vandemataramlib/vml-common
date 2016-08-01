"use strict";
var Root = (function () {
    function Root() {
    }
    Root.collection = "roots";
    Root.URL = function (id) { return "/roots" + (id ? "/" + id : ""); };
    return Root;
}());
exports.Root = Root;
