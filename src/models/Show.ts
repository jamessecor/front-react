import { IImage } from './Artist';

export interface IShow {
    name: string;
    displayName: string;
    description?: Array<string>;
    startDate?: Date;
    endDate?: Date;
    images?: Array<IImage>;
    featuredImage?: IImage;
};

export interface IShowImage {
    showName: string;
    src: string;
    isOnHomePage?: boolean;
    text?: string;
};
