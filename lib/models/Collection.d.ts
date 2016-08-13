import { Segment, Stanza } from "./Document";
export declare class CollectionStanza extends Stanza {
    originalURL: string;
    referenceTitle: string;
    constructor(data: CollectionStanza);
}
export declare class CollectionSegment implements Segment {
    stanzas: CollectionStanza[];
    id: number;
    constructor(data: CollectionSegment);
}
export declare class Collection {
    static URL: (id?: string) => string;
    static collection: string;
    _id: string;
    title: string;
    subtitle: string;
    segments: CollectionSegment[];
    constructor(data: any);
}
