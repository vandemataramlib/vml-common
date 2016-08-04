"use strict";
var jsonapi_serializer_1 = require("jsonapi-serializer");
exports.getSuffixSerializer = function (type, topLevelLinks, dataLinks) {
    var serializer = {
        topLevelLinks: topLevelLinks,
        dataLinks: dataLinks,
        id: "_id",
        keyForAttribute: "camelCase",
        attributes: ["suffix"]
    };
    return new jsonapi_serializer_1.Serializer(type, serializer);
};
