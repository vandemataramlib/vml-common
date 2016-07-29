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
export declare class Stanza implements LogicalEntity {
    static URL: (slug: string, subdocId: string, recordId: string, stanzaId: string) => string;
    id: number;
    segmentId: number;
    runningId: string;
    lines: Line[];
    stanza: string;
    analysis: Token[];
    constructor(data: Stanza, id?: number);
}
export interface Line {
    id: string;
    line?: string;
    words?: Word[];
}
export interface Word {
    id: string;
    word: string;
    analysis?: Token[];
}
export interface Token {
    id: string;
    token: string;
}
export interface IVolume {
}
export declare class Volume implements IVolume {
    constructor(data: any);
}
export interface ICollection {
}
export declare class Collection implements ICollection {
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
    Collection = 0,
    Volume = 1,
    Chapter = 2,
}
export interface IDocument extends DbEntity {
    url: string;
    docType: DocType;
    contents: Chapter | Volume | Collection;
}
export declare class Document implements Document {
    _id: string;
    docType: DocType;
    url: string;
    title: string;
    contents: Chapter | Volume | Collection;
    static collection: string;
    static URL: (slug: string, subdocId?: string, recordId?: string) => string;
    constructor(docType: DocType, title: string, data: any, id?: string);
}