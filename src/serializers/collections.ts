import { Serializer } from "jsonapi-serializer";

export const getCollectionSerializer = (type: string, topLevelLinks?: any, dataLinks?: any) => {

    const serializer = {
        topLevelLinks,
        dataLinks,
        id: "_id",
        keyForAttribute: "camelCase",
        attributes: ["title", "subtitle", "segments", "description"]
    };

    return new Serializer(type, serializer);
};

export const getCollectionStanzaSerializer = (type: string, topLevelLinks?: any, dataLinks?: any) => {

    const serializer = {
        topLevelLinks,
        keyForAttribute: "camelCase",
        attributes: ["runningId", "segmentId", "lines", "originalUrl", "referenceTitle"]
    };

    return new Serializer(type, serializer);
};
