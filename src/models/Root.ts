export class Root {
    static collection = "roots";
    static URL = (id?: string) => "/roots" + (id ? `/${id}` : "");
    _id: string;
    root: string;
    senses: string[];
}
