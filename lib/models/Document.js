"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var DocumentURL = (function () {
    function DocumentURL(slug, subdocId, recordId) {
        this.slug = slug;
        this.subdocId = subdocId;
        this.recordId = recordId;
    }
    return DocumentURL;
}());
exports.DocumentURL = DocumentURL;
var StanzaURL = (function (_super) {
    __extends(StanzaURL, _super);
    function StanzaURL(slug, subdocId, recordId, stanzaId) {
        _super.call(this, slug, subdocId, recordId);
        this.runningStanzaId = stanzaId;
    }
    return StanzaURL;
}(DocumentURL));
exports.StanzaURL = StanzaURL;
var Stanza = (function () {
    function Stanza(data) {
        this.lines = data.lines;
        this.analysis = data.analysis;
        this.runningId = data.runningId;
        this.segmentId = data.segmentId;
        this.stanza = data.stanza;
        this.id = data.id;
        this.translation = data.translation;
    }
    Stanza.URLFromDocURL = function (documentURL, runningStanzaId) {
        return documentURL + "/stanzas/" + runningStanzaId;
    };
    Stanza.URL = function (slug, subdocId, recordId, runningStanzaId) {
        var url = "/docs/" + slug;
        if (subdocId) {
            url += "/subdocs/" + subdocId;
        }
        if (recordId) {
            url += "/records/" + recordId;
        }
        return Stanza.URLFromDocURL(url, runningStanzaId);
    };
    Stanza.URLToParams = function (stanzaURL) {
        if (!stanzaURL || !stanzaURL.length) {
            return;
        }
        var stanzaURLRegex = /\/docs\/([\w-~\.\^]+)(?:\/subdocs\/(\w+)(?:\/records\/(\w+))?)?(?:\/stanzas\/(\d+))/;
        var params = stanzaURL.split(stanzaURLRegex);
        return new StanzaURL(params[1], params[2], params[3], params[4]);
    };
    Stanza.URLToWebURL = function (stanzaURL) {
        var params = Stanza.URLToParams(stanzaURL);
        return "/" + params.slug
            + (params.subdocId ? "/" + params.subdocId : "")
            + (params.recordId ? "/" + params.recordId : "")
            + ("#p" + params.runningStanzaId);
    };
    return Stanza;
}());
exports.Stanza = Stanza;
var Line = (function () {
    function Line(line) {
        this.id = line.id;
        this.line = line.line;
        this.words = line.words;
        this.stanzaId = line.stanzaId;
    }
    return Line;
}());
exports.Line = Line;
var Word = (function () {
    function Word(word) {
        Object.assign(this, word);
    }
    return Word;
}());
exports.Word = Word;
var Token = (function () {
    function Token(token) {
        Object.assign(this, token);
    }
    return Token;
}());
exports.Token = Token;
(function (EtymologyType) {
    EtymologyType[EtymologyType["Root"] = 0] = "Root";
    EtymologyType[EtymologyType["Prefix"] = 1] = "Prefix";
    EtymologyType[EtymologyType["Suffix"] = 2] = "Suffix";
})(exports.EtymologyType || (exports.EtymologyType = {}));
var EtymologyType = exports.EtymologyType;
var Etymology = (function () {
    function Etymology(ety) {
        Object.assign(this, ety);
    }
    return Etymology;
}());
exports.Etymology = Etymology;
var Volume = (function () {
    function Volume(data) {
    }
    return Volume;
}());
exports.Volume = Volume;
var Compilation = (function () {
    function Compilation(data) {
    }
    return Compilation;
}());
exports.Compilation = Compilation;
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
            this.contents = new Compilation(data);
        }
    }
    Document.collection = "documents";
    Document.URL = function (slug, subdocId, recordId) {
        var url = "/docs/" + slug;
        if (subdocId) {
            url += "/subdocs/" + subdocId;
        }
        if (recordId) {
            url += "/records/" + recordId;
        }
        return url;
    };
    Document.URLToParams = function (documentUrl) {
        if (!documentUrl || !documentUrl.length) {
            return;
        }
        var documentUrlRegex = /\/docs\/([\w-~\.\^]+)(?:\/subdocs\/(\w+)(?:\/records\/(\w+))?)?/;
        var params = documentUrl.split(documentUrlRegex);
        return new DocumentURL(params[1], params[2], params[3]);
    };
    Document.URLToWebURL = function (documentURL) {
        var params = Document.URLToParams(documentURL);
        return "/" + params.slug + (params.subdocId ? "/" + params.subdocId : "") + (params.recordId ? "/" + params.recordId : "");
    };
    return Document;
}());
exports.Document = Document;
