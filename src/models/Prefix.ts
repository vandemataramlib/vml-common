import { API_SERVER_BASE_URL } from "../constants";

export class Prefix {
    static URL = (id: string) => API_SERVER_BASE_URL + "/prefixes/" + id;
    static collection = "prefixes";
    _id: string;
    prefix: string;
    senses: string[];
    constructor(data: Prefix, id?: string) {

        this.prefix = data.prefix;
        this.senses = data.senses;
    }
}
