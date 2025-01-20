import { IImage, IVideo } from './Artist';

export interface IShow {
    name: string;
    number: number;
    displayName: string;
    description?: Array<string>;
    startDate?: Date;
    endDate?: Date;
    images?: Array<IImage>;
    videos?: Array<IVideo>;
    featuredImage?: IImage;
};
