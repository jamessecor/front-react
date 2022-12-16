import { IShowImage } from "./Show";

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
    showImages?: Array<IShowImage>;
    bio?: Array<string>;
}