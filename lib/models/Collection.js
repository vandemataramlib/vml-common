"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Document_1 = require("./Document");
var CollectionStanza = (function (_super) {
    __extends(CollectionStanza, _super);
    function CollectionStanza(data) {
        _super.call(this, data);
        Object.assign(this, data);
    }
    return CollectionStanza;
}(Document_1.Stanza));
exports.CollectionStanza = CollectionStanza;
var CollectionSegment = (function () {
    function CollectionSegment(data) {
        Object.assign(this, data);
    }
    return CollectionSegment;
}());
exports.CollectionSegment = CollectionSegment;
var Collection = (function () {
    function Collection(data) {
        Object.assign(this, data);
    }
    Collection.URL = function (id) { return "/collections" + (id ? "/" + id : ""); };
    Collection.collection = "collections";
    return Collection;
}());
exports.Collection = Collection;
