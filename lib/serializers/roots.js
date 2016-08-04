"use strict";
var jsonapi_serializer_1 = require("jsonapi-serializer");
exports.getRootSerializer = function (type, topLevelLinks, dataLinks) {
    var options = {
        topLevelLinks: topLevelLinks,
        dataLinks: dataLinks,
        id: "_id",
        attributes: ["root", "senses"],
        keyForAttribute: "camelCase"
    };
    return new jsonapi_serializer_1.Serializer(type, options);
};
