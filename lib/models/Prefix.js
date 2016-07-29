"use strict";
var constants_1 = require("../constants");
var Prefix = (function () {
    function Prefix(data, id) {
        this.prefix = data.prefix;
        this.senses = data.senses;
    }
    Prefix.URL = function (id) { return constants_1.API_SERVER_BASE_URL + "/prefixes" + (id ? "/" + id : ""); };
    Prefix.collection = "prefixes";
    return Prefix;
}());
exports.Prefix = Prefix;
