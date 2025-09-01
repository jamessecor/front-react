import { IImage, IVideo } from './Artist';

export interface IShow {
    name: string;
    number: number;
    displayName: string;
    superDisplayName?: string;
    descriptionBold?: Array<string>;
    description?: Array<string>;
    startDate?: Date;
    endDate?: Date;
    artistParamName?: string;
    images?: Array<IImage>;
    videos?: Array<IVideo>;
    featuredImage?: IImage;
};
