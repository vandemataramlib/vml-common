import { Segment, Stanza } from "./Document";

export class CollectionStanza extends Stanza {
    originalURL: string;
    referenceTitle: string;

    constructor(data: CollectionStanza) {

        super(data);
        Object.assign(this, data);
    }
}

export class CollectionSegment implements Segment {
    stanzas: CollectionStanza[];
    id: number;

    constructor(data: CollectionSegment) {
        Object.assign(this, data);
    }
}

export class Collection {
    static URL = (id?: string) => "/collections" + (id ? `/${id}` : "");
    static collection = "collections";

    _id: string;
    title: string;
    subtitle: string;
    segments: CollectionSegment[];

    constructor(data: any) {

        Object.assign(this, data);
    }
}
