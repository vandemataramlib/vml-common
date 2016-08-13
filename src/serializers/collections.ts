import { Serializer } from "jsonapi-serializer";

export const getCollectionSerializer = (type: string, topLevelLinks?: any, dataLinks?: any) => {

    const serializer = {
        topLevelLinks,
        dataLinks,
        id: "_id",
        keyForAttribute: "camelCase",
        attributes: ["title", "subtitle", "segments"]
    };

    return new Serializer(type, serializer);
};
