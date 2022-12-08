import { useCallback, useMemo, useState } from 'react';
import { artists } from '../data/artists';
import { IArtwork } from '../models/Artwork';
import { IShowImage } from '../models/Show';

const useImages = () => {
    const getFullImagePath = (relativePath: string) => `${process.env.REACT_APP_URL}/images/artists/${relativePath}`;

    const artistsWithImagesForCurrentShow = useMemo(() => artists.filter(
        (artist) => artist.showImages?.length
            && artist.showImages
                .filter((showImage) => showImage.showName === process.env.REACT_APP_CURRENT_SHOW)
                .length
    ), [artists]);

    const getCurrentShowImages = useCallback(() => {
        const images: Array<IShowImage> = [];

        artistsWithImagesForCurrentShow.forEach((artist) => {
            if (artist.showImages?.length) {
                images.push(...artist.showImages?.filter((showImage) =>
                    showImage.showName === process.env.REACT_APP_CURRENT_SHOW));
            }
        });

        return images;
    }, [artistsWithImagesForCurrentShow]);

    const currentShowImages = useMemo(() => getCurrentShowImages(), [getCurrentShowImages]);

    const currentShowImagesForHomePage = useMemo(() => currentShowImages.filter((showImage) => showImage.isOnHomePage), [currentShowImages]);

    return {
        artistsWithImagesForCurrentShow,
        currentShowImages,
        currentShowImagesForHomePage,
        getFullImagePath
    };
};

export default useImages;