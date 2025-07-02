interface IInstagram {
    link: string;
    handle: string;
}

export interface IImage {
    src: string;
    directory?: string;
    text?: string;
    scale?: number;
    position?: string;
}

export interface IVideo {
    src: string;
    text?: string;
    type: 'YouTube' | 'File';
}

export interface IArtist {
    paramName: string;
    name: string;
    website?: string;
    instagram?: IInstagram;
    thumbnail?: IImage;
    images: Array<IImage>;
    videos?: Array<IVideo>;
    bio?: Array<string>;
    isNotMember?: boolean;
}