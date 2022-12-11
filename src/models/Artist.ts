import { IShowImage } from "./Show";

interface IInstagram {
    link: string;
    handle: string;
}

export interface IArtist {
    paramName: string;
    name: string;
    website?: string;
    instagram?: IInstagram;
    images: Array<string>;
    showImages?: Array<IShowImage>;
}