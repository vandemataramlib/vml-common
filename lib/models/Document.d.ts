export interface Book extends LogicalEntity {
    contents: Chapter[] | Part[];
}
export interface Part extends LogicalEntity {
    contents: Chapter[] | Section[];
}
export interface Section extends LogicalEntity {
    contents: Chapter[] | Subsection[];
}
export interface Subsection extends LogicalEntity {
    contents: Chapter[];
}
export declare enum ContentType {
    Padya = 0,
    Gadya = 1,
    Sutra = 2,
    Bhashya = 3,
    Mishra = 4,
    Natya = 5,
}
export interface IChapter extends LogicalEntity {
    segments: Segment[];
    contentType: ContentType;
}
export declare class Chapter implements IChapter {
    id: number;
    segments: Segment[];
    contentType: ContentType;
    constructor(data: any);
}
export interface Segment extends LogicalEntity {
    stanzas: Stanza[];
}
export declare class DocumentURL {
    slug: string;
    subdocId: string;
    recordId: string;
    constructor(slug: string, subdocId?: string, recordId?: string);
}
export declare class StanzaURL extends DocumentURL {
    runningStanzaId: string;
    constructor(slug: string, subdocId: string, recordId: string, stanzaId: string);
}
export declare class Stanza implements LogicalEntity {
    id: number;
    segmentId: number;
    runningId: string;
    lines: Line[];
    stanza: string;
    analysis: Token[];
    translation: string;
    static URLFromDocURL: (documentURL: string, runningStanzaId: string) => string;
    static URL: (slug: string, subdocId: string, recordId: string, runningStanzaId: string) => string;
    static URLToParams: (stanzaURL: string) => StanzaURL;
    static URLToWebURL: (stanzaURL: string) => string;
    constructor(data: Stanza);
}
export declare class Line {
    id: string;
    line: string;
    words: Word[];
    stanzaId: number;
    constructor(line: Line);
}
export declare class Word {
    id: string;
    word: string;
    analysis: Token[];
    lineId: string;
    definition: string | string[];
    constructor(word: Word);
}
export declare class Token {
    id: string;
    token: string;
    wordId: string;
    ety: Etymology[];
    definition: string | string[];
    constructor(token: Token);
}
export declare enum EtymologyType {
    Root = 0,
    Prefix = 1,
    Suffix = 2,
}
export declare class Etymology {
    id: string;
    tokenId: string;
    type: EtymologyType;
    typeId: string;
    value: string;
    senses: string[];
    constructor(ety: Etymology);
}
export interface IVolume {
}
export declare class Volume implements IVolume {
    constructor(data: any);
}
export interface ICompilation {
}
export declare class Compilation implements ICompilation {
    constructor(data: any);
}
export interface MetaStructure {
    title?: string;
    subtitle?: string;
    desc?: string;
    meta?: any;
    dataType?: string;
}
export interface LogicalEntity extends MetaStructure {
    id: number;
}
export interface DbEntity extends MetaStructure {
    _id: string;
}
export declare enum DocType {
    Compilation = 0,
    Volume = 1,
    Chapter = 2,
}
export interface IDocument extends DbEntity {
    url: string;
    docType: DocType;
    contents: Chapter | Volume | Compilation;
}
export declare class Document implements IDocument {
    _id: string;
    docType: DocType;
    url: string;
    title: string;
    contents: Chapter | Volume | Compilation;
    static collection: string;
    static URL: (slug: string, subdocId?: string, recordId?: string) => string;
    static URLToParams: (documentUrl: string) => DocumentURL;
    static URLToWebURL: (documentURL: string) => string;
    constructor(document: IDocument);
}
