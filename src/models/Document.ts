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
    stanzaId: string;
    constructor(slug: string, subdocId: string, recordId: string, stanzaId: string) {

        super(slug, subdocId, recordId);
        this.stanzaId = stanzaId;
    }
}

export class Stanza implements LogicalEntity {
    id: number;
    segmentId: number;
    runningId: string;
    lines: Line[];
    stanza: string;
    analysis: Token[];

    static URL = (slug: string, subdocId: string, recordId: string, stanzaId: string) => {

        let url = `/docs/${slug}`;

        if (subdocId) {
            url += `/subdocs/${subdocId}`;
        }

        if (recordId) {
            url += `/records/${recordId}`;
        }

        url += `/stanzas/${stanzaId}`;

        return url;
    };

    static URLToParams = (stanzaURL: string): StanzaURL => {

        if (!stanzaURL || !stanzaURL.length) {

            return;
        }

        const stanzaURLRegex = /\/docs\/([\w-~\.\^]+)(?:\/subdocId\/(\w+)(?:\/recordId\/(\w+))?)?(?:\/stanzas\/(\d))/;

        const params = stanzaURL.split(stanzaURLRegex);

        return new StanzaURL(params[1], params[2], params[3], params[4]);
    }

    constructor(data: Stanza, id?: number) {
        this.lines = data.lines;
        this.analysis = data.analysis;
        if (id) {
            this.id = id;
        }
    }
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

// enum DocumentDataTypes {
//     chapter,
//     chapters,
//     books
// }

export interface IVolume { }

export class Volume implements IVolume {
    constructor(data: any) { }
}

export interface ICollection { }

export class Collection implements ICollection {
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
    Collection,
    Volume,
    Chapter
}

export interface IDocument extends DbEntity {
    url: string;
    docType: DocType;
    contents: Chapter | Volume | Collection;
}

export class Document implements Document {
    _id: string;
    docType: DocType;
    url: string;
    title: string;
    contents: Chapter | Volume | Collection;

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

        const documentUrlRegex = /\/docs\/([\w-~\.\^]+)(?:\/subdocId\/(\w+)(?:\/recordId\/(\w+))?)?/;

        const params = documentUrl.split(documentUrlRegex);

        return new DocumentURL(params[1], params[2], params[3]);
    }

    constructor(docType: DocType, title: string, data: any, id?: string) {

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
}
