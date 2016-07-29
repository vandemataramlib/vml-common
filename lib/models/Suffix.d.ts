export declare enum SuffixType {
    Primary = 0,
    Secondary = 1,
}
export declare enum POS {
    Noun = 0,
    Verb = 1,
    Participle = 2,
    Adjective = 3,
    Adverb = 4,
}
export declare enum Tense {
    Present = 0,
    Past = 1,
    Future = 2,
}
export declare enum Voice {
    Parasmaipada = 0,
    Atmanepada = 1,
    PerfectParasmaipada = 2,
    PerfectAtmanepada = 3,
    Passive = 4,
    Active = 5,
}
export declare enum Degree {
    Comparative = 0,
    Superlative = 1,
}
export declare enum Gender {
    Feminine = 0,
    Masculine = 1,
    Neuter = 2,
}
export declare enum Number {
    Singular = 0,
    Dual = 1,
    Plural = 2,
}
export interface ISuffix {
    _id?: string;
    suffix: string;
    senses?: string[];
    type?: SuffixType;
    pos?: POS | POS[];
    tense?: Tense;
    voice?: Voice;
    degree?: Degree;
    gender?: Gender;
    number?: Number;
    formOf?: string;
    note?: string;
}
export declare class Suffix implements ISuffix {
    _id: string;
    suffix: string;
    static collection: string;
    static URL: (id?: string) => string;
}
