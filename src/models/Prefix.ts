export class Prefix {
    static URL = (id?: string) => "/prefixes" + (id ? `/${id}` : "");
    static collection = "prefixes";
    _id: string;
    prefix: string;
    senses: string[];
    constructor(data: Prefix, id?: string) {

        this.prefix = data.prefix;
        this.senses = data.senses;
    }
}
