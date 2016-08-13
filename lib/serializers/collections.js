"use strict";
var jsonapi_serializer_1 = require("jsonapi-serializer");
exports.getCollectionSerializer = function (type, topLevelLinks, dataLinks) {
    var serializer = {
        topLevelLinks: topLevelLinks,
        dataLinks: dataLinks,
        id: "_id",
        keyForAttribute: "camelCase",
        attributes: ["title", "subtitle", "segments"]
    };
    return new jsonapi_serializer_1.Serializer(type, serializer);
};
exports.getCollectionStanzaSerializer = function (type, topLevelLinks, dataLinks) {
    var serializer = {
        topLevelLinks: topLevelLinks,
        keyForAttribute: "camelCase",
        attributes: ["runningId", "segmentId", "lines", "originalURL", "referenceTitle"]
    };
    return new jsonapi_serializer_1.Serializer(type, serializer);
};
