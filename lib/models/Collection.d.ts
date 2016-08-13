import { Segment, Stanza } from "./Document";
export declare class CollectionStanza extends Stanza {
}
export interface CollectionSegment extends Segment {
    stanzas: CollectionStanza[];
}
export declare class Collection {
    static URL: (id?: string) => string;
    static collection: string;
    _id: string;
    segments: CollectionSegment[];
}
