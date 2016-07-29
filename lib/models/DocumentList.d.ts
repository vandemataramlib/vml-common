import { DocType } from "./Document";
export interface IDocumentListGroup {
    _id: string;
    title: string;
    subtitle?: string;
    desc?: string;
    items: DocumentListItem[];
}
export declare class DocumentListGroup implements IDocumentListGroup {
    static collection: string;
    static URL: (id: string) => string;
    _id: string;
    title: string;
    items: DocumentListItem[];
}
export interface DocumentListItem {
    title: string;
    url: string;
    docType: DocType;
}
