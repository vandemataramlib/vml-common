import { Serializer } from "jsonapi-serializer";

export const getChapterSerializer = (type: string, selfURL?: string) => {

    const serializer = {
        topLevelLinks: {
            self: selfURL
        },
        id: "_id",
        attributes: ["title", "url", "contents", "docType"],
        keyForAttribute: "camelCase",
        contents: {
            attributes: ["segments"],
            segments: {
                attributes: ["title", "stanzas"],
                stanzas: {
                    attributes: ["lines", "id", "runningId"],
                    lines: {
                        attributes: ["line"]
                    }
                }
            }
        }
    };

    return new Serializer(type, serializer);
};

export const getVolumeSerializer = (type: string, selfURL: string) => { };

export const getCompilationSerializer = (type: string, selfURL: string) => { };
