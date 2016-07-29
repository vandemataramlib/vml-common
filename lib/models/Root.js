"use strict";
var constants_1 = require("../constants");
var Root = (function () {
    function Root() {
    }
    Root.collection = "roots";
    Root.URL = function (id) { return constants_1.API_SERVER_BASE_URL + "/roots/" + id; };
    return Root;
}());
exports.Root = Root;
