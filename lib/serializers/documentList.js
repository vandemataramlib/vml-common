"use strict";
var jsonapi_serializer_1 = require("jsonapi-serializer");
exports.getDocumentListSerializer = function (type, topLevelLinks, dataLinks) {
    var options = {
        id: "_id",
        topLevelLinks: topLevelLinks,
        dataLinks: dataLinks,
        attributes: ["title", "subtitle", "desc", "items"],
        keyForAttribute: "camelCase"
    };
    return new jsonapi_serializer_1.Serializer(type, options);
};
