"use strict";
var Prefix = (function () {
    function Prefix(data, id) {
        this.prefix = data.prefix;
        this.senses = data.senses;
    }
    Prefix.URL = function (id) { return "/prefixes" + (id ? "/" + id : ""); };
    Prefix.collection = "prefixes";
    return Prefix;
}());
exports.Prefix = Prefix;
