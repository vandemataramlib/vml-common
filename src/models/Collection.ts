import { Segment, Stanza } from "./Document";

export class CollectionStanza extends Stanza { }

export interface CollectionSegment extends Segment {
    stanzas: CollectionStanza[];
}

export class Collection {
    static URL = (id?: string) => "/collections" + (id ? `/${id}` : "");
    static collection = "collections";

    _id: string;
    title: string;
    subtitle: string;
    segments: CollectionSegment[];
}
