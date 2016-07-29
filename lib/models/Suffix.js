"use strict";
var constants_1 = require("../constants");
(function (SuffixType) {
    SuffixType[SuffixType["Primary"] = 0] = "Primary";
    SuffixType[SuffixType["Secondary"] = 1] = "Secondary";
})(exports.SuffixType || (exports.SuffixType = {}));
var SuffixType = exports.SuffixType;
(function (POS) {
    POS[POS["Noun"] = 0] = "Noun";
    POS[POS["Verb"] = 1] = "Verb";
    POS[POS["Participle"] = 2] = "Participle";
    POS[POS["Adjective"] = 3] = "Adjective";
    POS[POS["Adverb"] = 4] = "Adverb";
})(exports.POS || (exports.POS = {}));
var POS = exports.POS;
(function (Tense) {
    Tense[Tense["Present"] = 0] = "Present";
    Tense[Tense["Past"] = 1] = "Past";
    Tense[Tense["Future"] = 2] = "Future";
})(exports.Tense || (exports.Tense = {}));
var Tense = exports.Tense;
(function (Voice) {
    Voice[Voice["Parasmaipada"] = 0] = "Parasmaipada";
    Voice[Voice["Atmanepada"] = 1] = "Atmanepada";
    Voice[Voice["PerfectParasmaipada"] = 2] = "PerfectParasmaipada";
    Voice[Voice["PerfectAtmanepada"] = 3] = "PerfectAtmanepada";
    Voice[Voice["Passive"] = 4] = "Passive";
    Voice[Voice["Active"] = 5] = "Active";
})(exports.Voice || (exports.Voice = {}));
var Voice = exports.Voice;
(function (Degree) {
    Degree[Degree["Comparative"] = 0] = "Comparative";
    Degree[Degree["Superlative"] = 1] = "Superlative";
})(exports.Degree || (exports.Degree = {}));
var Degree = exports.Degree;
(function (Gender) {
    Gender[Gender["Feminine"] = 0] = "Feminine";
    Gender[Gender["Masculine"] = 1] = "Masculine";
    Gender[Gender["Neuter"] = 2] = "Neuter";
})(exports.Gender || (exports.Gender = {}));
var Gender = exports.Gender;
(function (Number) {
    Number[Number["Singular"] = 0] = "Singular";
    Number[Number["Dual"] = 1] = "Dual";
    Number[Number["Plural"] = 2] = "Plural";
})(exports.Number || (exports.Number = {}));
var Number = exports.Number;
var Suffix = (function () {
    function Suffix() {
    }
    Suffix.collection = "suffixes";
    Suffix.URL = function (id) { return constants_1.API_SERVER_BASE_URL + "/suffixes" + (id ? "/" + id : ""); };
    return Suffix;
}());
exports.Suffix = Suffix;
