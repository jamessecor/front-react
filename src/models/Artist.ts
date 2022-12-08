import { IShowImage } from "./Show";

export interface IArtist {
    paramName: string;
    name: string;
    images: Array<string>;
    showImages?: Array<IShowImage>;
}