declare module "jsonapi-serializer" {
    export class Serializer {
        constructor(type: string, opts: any);
        serialize(data: any): any;
    }

    export class Deserializer {
        constructor(opts?: any);
        deserialize(data: any, cb: (err: Error, data: any) => void): any;
        deserialize(data: any): Promise<any>;
    }
}
