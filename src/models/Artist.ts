interface IShowImage {
    name: string;
    src: string;
}

export interface IArtist {
    paramName: string;
    name: string;
    images: Array<string>;
    showImages?: Array<IShowImage>;
}