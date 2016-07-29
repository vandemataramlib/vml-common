export declare class Prefix {
    static URL: (id: string) => string;
    static collection: string;
    _id: string;
    prefix: string;
    senses: string[];
    constructor(data: Prefix, id?: string);
}
