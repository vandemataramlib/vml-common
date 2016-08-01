"use strict";
var DocumentListGroup = (function () {
    function DocumentListGroup() {
    }
    DocumentListGroup.collection = "documentLists";
    DocumentListGroup.URL = function (id) { return "/docList" + (id ? "/" + id : ""); };
    return DocumentListGroup;
}());
exports.DocumentListGroup = DocumentListGroup;
