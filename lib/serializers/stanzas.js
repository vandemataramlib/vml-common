"use strict";
var jsonapi_serializer_1 = require("jsonapi-serializer");
exports.getStanzaSerializer = function (type, topLevelLinks) {
    var serializer = {
        topLevelLinks: topLevelLinks,
        keyForAttribute: "camelCase",
        attributes: ["runningId", "segmentId", "lines", "analysis", "stanza", "translation"]
    };
    return new jsonapi_serializer_1.Serializer(type, serializer);
};
