import { DocType } from "./Document";

export interface IDocumentListGroup {
    _id: string;
    title: string;
    subtitle?: string;
    desc?: string;
    items: DocumentListItem[];
}

export class DocumentListGroup implements IDocumentListGroup {
    static collection = "documentLists";
    static URL = (id?: string) => "/docList" + (id ? `/${id}` : "");
    _id: string;
    title: string;
    items: DocumentListItem[];
}

export interface DocumentListItem {
    title: string;
    url: string;
    docType: DocType;
}
