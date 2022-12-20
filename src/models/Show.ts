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
