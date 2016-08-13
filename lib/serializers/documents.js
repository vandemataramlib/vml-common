"use strict";
var jsonapi_serializer_1 = require("jsonapi-serializer");
exports.getChapterSerializer = function (type, selfURL) {
    var serializer = {
        topLevelLinks: {
            self: selfURL
        },
        id: "_id",
        attributes: ["title", "url", "contents", "docType"],
        keyForAttribute: "camelCase",
        contents: {
            attributes: ["segments"],
            segments: {
                attributes: ["title", "stanzas"],
                stanzas: {
                    attributes: ["lines", "id", "runningId"],
                    lines: {
                        attributes: ["line"]
                    }
                }
            }
        }
    };
    return new jsonapi_serializer_1.Serializer(type, serializer);
};
exports.getVolumeSerializer = function (type, selfURL) { };
exports.getCompilationSerializer = function (type, selfURL) { };
