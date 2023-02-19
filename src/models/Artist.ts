interface IInstagram {
    link: string;
    handle: string;
}

export interface IImage {
    src: string;
    text?: string;
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