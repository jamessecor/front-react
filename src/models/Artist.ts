interface IInstagram {
    link: string;
    handle: string;
}

export interface IImage {
    src: string;
    text?: string;
    scale?: number;
    position?: string;
}

export interface IArtist {
    paramName: string;
    name: string;
    website?: string;
    instagram?: IInstagram;
    images: Array<IImage>;
    bio?: Array<string>;
    isNotMember?: boolean;
}