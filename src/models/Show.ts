export interface IShow {
    name: string;
    displayName: string;
    startDate?: Date;
    endDate?: Date;
};

export interface IShowImage {
    showName: string;
    src: string;
    isOnHomePage?: boolean;
    text?: string;
};
