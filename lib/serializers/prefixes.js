"use strict";
var jsonapi_serializer_1 = require("jsonapi-serializer");
exports.getPrefixSerializer = function (type, topLevelLinks, dataLinks) {
    var serializer = {
        topLevelLinks: topLevelLinks,
        dataLinks: dataLinks,
        id: "_id",
        keyForAttribute: "camelCase",
        attributes: ["prefix", "senses"]
    };
    return new jsonapi_serializer_1.Serializer(type, serializer);
};
