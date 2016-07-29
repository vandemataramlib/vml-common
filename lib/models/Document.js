"use strict";
var constants_1 = require("../constants");
(function (ContentType) {
    ContentType[ContentType["Padya"] = 0] = "Padya";
    ContentType[ContentType["Gadya"] = 1] = "Gadya";
    ContentType[ContentType["Sutra"] = 2] = "Sutra";
    ContentType[ContentType["Bhashya"] = 3] = "Bhashya";
    ContentType[ContentType["Mishra"] = 4] = "Mishra";
    ContentType[ContentType["Natya"] = 5] = "Natya";
})(exports.ContentType || (exports.ContentType = {}));
var ContentType = exports.ContentType;
var Chapter = (function () {
    function Chapter(data) {
    }
    return Chapter;
}());
exports.Chapter = Chapter;
var Stanza = (function () {
    function Stanza(data, id) {
        this.lines = data.lines;
        this.analysis = data.analysis;
        if (id) {
            this.id = id;
        }
    }
    Stanza.URL = function (slug, subdocId, recordId, stanzaId) {
        var url = constants_1.API_SERVER_BASE_URL + "/docs/" + slug;
        if (subdocId) {
            url += "/subdocs/" + subdocId;
        }
        if (recordId) {
            url += "/records/" + recordId;
        }
        url += "/stanza/" + stanzaId;
        return url;
    };
    return Stanza;
}());
exports.Stanza = Stanza;
var Volume = (function () {
    function Volume(data) {
    }
    return Volume;
}());
exports.Volume = Volume;
var Collection = (function () {
    function Collection(data) {
    }
    return Collection;
}());
exports.Collection = Collection;
(function (DocType) {
    DocType[DocType["Collection"] = 0] = "Collection";
    DocType[DocType["Volume"] = 1] = "Volume";
    DocType[DocType["Chapter"] = 2] = "Chapter";
})(exports.DocType || (exports.DocType = {}));
var DocType = exports.DocType;
var Document = (function () {
    function Document(docType, title, data, id) {
        this.docType = docType;
        this.title = title;
        if (id) {
            this._id = id;
        }
        if (docType === DocType.Chapter) {
            this.contents = new Chapter(data);
        }
        else if (docType === DocType.Volume) {
            this.contents = new Volume(data);
        }
        else if (docType === DocType.Collection) {
            this.contents = new Collection(data);
        }
    }
    Document.collection = "documents";
    Document.URL = function (slug, subdocId, recordId) {
        var url = constants_1.API_SERVER_BASE_URL + "/docs/" + slug;
        if (subdocId) {
            url += "/subdocs/" + subdocId;
        }
        if (recordId) {
            url += "/records/" + recordId;
        }
        return url;
    };
    return Document;
}());
exports.Document = Document;
