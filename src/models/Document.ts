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

export enum ContentType {
    Padya,
    Gadya,
    Sutra,
    Bhashya,
    Mishra,
    Natya
}

export interface IChapter extends LogicalEntity {
    segments: Segment[];
    contentType: ContentType;
}

export class Chapter implements IChapter {
    id: number;
    segments: Segment[];
    contentType: ContentType;
    constructor(data: any) { }
}

export interface Segment extends LogicalEntity {

    stanzas: Stanza[];
}

export class DocumentURL {
    slug: string;
    subdocId: string;
    recordId: string;
    constructor(slug: string, subdocId?: string, recordId?: string) {
        this.slug = slug;
        this.subdocId = subdocId;
        this.recordId = recordId;
    }
}

export class StanzaURL extends DocumentURL {
    runningStanzaId: string;
    constructor(slug: string, subdocId: string, recordId: string, stanzaId: string) {

        super(slug, subdocId, recordId);
        this.runningStanzaId = stanzaId;
    }
}

export class Stanza implements LogicalEntity {
    id: number;
    segmentId: number;
    runningId: string;
    lines: Line[];
    stanza: string;
    analysis: Token[];
    translation: string;

    static URLFromDocURL = (documentURL: string, runningStanzaId: string) => {

        return `${documentURL}/stanzas/${runningStanzaId}`;
    }

    static URL = (slug: string, subdocId: string, recordId: string, runningStanzaId: string) => {

        let url = `/docs/${slug}`;

        if (subdocId) {
            url += `/subdocs/${subdocId}`;
        }

        if (recordId) {
            url += `/records/${recordId}`;
        }

        return Stanza.URLFromDocURL(url, runningStanzaId);
    };

    static URLToParams = (stanzaURL: string): StanzaURL => {

        if (!stanzaURL || !stanzaURL.length) {

            return;
        }

        const stanzaURLRegex = /\/docs\/([\w-~\.\^]+)(?:\/subdocs\/([\w-~\.\^]+)(?:\/records\/([\w-~\.\^]+))?)?(?:\/stanzas\/(\d+))/;

        const params = stanzaURL.split(stanzaURLRegex);

        return new StanzaURL(params[1], params[2], params[3], params[4]);
    }

    static URLToWebURL = (stanzaURL: string): string => {

        const params = Stanza.URLToParams(stanzaURL);

        return "/" + params.slug
            + (params.subdocId ? "/" + params.subdocId : "")
            + (params.recordId ? "/" + params.recordId : "")
            + `#p${params.runningStanzaId}`;
    }

    constructor(data: Stanza) {
        this.lines = data.lines;
        this.analysis = data.analysis;
        this.runningId = data.runningId;
        this.segmentId = data.segmentId;
        this.stanza = data.stanza;
        this.id = data.id;
        this.translation = data.translation;
    }
}

export class Line {
    id: string;
    line: string;
    words: Word[];
    stanzaId: number;

    constructor(line: Line) {

        this.id = line.id;
        this.line = line.line;
        this.words = line.words;
        this.stanzaId = line.stanzaId;
    }
}

export class Word {
    id: string;
    word: string;
    analysis: Token[];
    lineId: string;
    definition: string | string[];

    constructor(word: Word) {

        Object.assign(this, word);
    }
}

export class Token {
    id: string;
    token: string;
    wordId: string;
    ety: Etymology[];
    definition: string | string[];

    constructor(token: Token) {

        Object.assign(this, token);
    }
}

export enum EtymologyType {
    Root,
    Prefix,
    Suffix
}

export class Etymology {
    id: string;
    tokenId: string;
    type: EtymologyType;
    typeId: string;
    value: string;
    senses: string[];

    constructor(ety: Etymology) {

        Object.assign(this, ety);
    }
}

export interface IVolume { }

export class Volume implements IVolume {
    constructor(data: any) { }
}

export interface ICompilation { }

export class Compilation implements ICompilation {
    constructor(data: any) { }
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

export enum DocType {
    Compilation,
    Volume,
    Chapter
}

export interface IDocument extends DbEntity {
    url: string;
    docType: DocType;
    contents: Chapter | Volume | Compilation;
}

export class Document implements IDocument {
    _id: string;
    docType: DocType;
    url: string;
    title: string;
    contents: Chapter | Volume | Compilation;

    static collection = "documents";

    static URL = (slug: string, subdocId?: string, recordId?: string) => {

        let url = `/docs/${slug}`;

        if (subdocId) {
            url += `/subdocs/${subdocId}`;
        }

        if (recordId) {
            url += `/records/${recordId}`;
        }

        return url;
    };

    static URLToParams = (documentUrl: string): DocumentURL => {

        if (!documentUrl || !documentUrl.length) {

            return;
        }

        const documentUrlRegex = /\/docs\/([\w-~\.\^]+)(?:\/subdocs\/([\w-~\.\^]+)(?:\/records\/([\w-~\.\^]+))?)?/;

        const params = documentUrl.split(documentUrlRegex);

        return new DocumentURL(params[1], params[2], params[3]);
    }

    static URLToWebURL = (documentURL: string): string => {

        const params = Document.URLToParams(documentURL);

        return "/" + params.slug + (params.subdocId ? "/" + params.subdocId : "") + (params.recordId ? "/" + params.recordId : "");
    }

    constructor(document: IDocument) {

        Object.assign(this, document);
    }
}
