"use strict";
var constants_1 = require("../constants");
var DocumentListGroup = (function () {
    function DocumentListGroup() {
    }
    DocumentListGroup.collection = "documentLists";
    DocumentListGroup.URL = function (id) { return constants_1.API_SERVER_BASE_URL + "/docList/" + id; };
    return DocumentListGroup;
}());
exports.DocumentListGroup = DocumentListGroup;
