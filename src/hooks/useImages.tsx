import { useCallback, useMemo, useState } from 'react';
import { artists } from '../data/artists';
import { IArtwork } from '../models/Artwork';
import { IShowImage } from '../models/Show';
import { shows } from '../data/shows';

const useImages = () => {
    const getFullImagePath = (relativePath: string) => `${process.env.REACT_APP_URL}/images/artists/${relativePath}`;

    const getShowByName = useCallback((name: string) => {
        return shows.filter((a) => a.name === name).length
        ? shows.filter((a) => a.name === name)[0]
        : null
    }, [shows]);

    const artistsWithImagesForCurrentShow = useMemo(() => artists.filter(
        (artist) => artist.showImages?.length
            && artist.showImages
                .filter((showImage) => showImage.showName === process.env.REACT_APP_CURRENT_SHOW)
                .length
    ), [artists]);

    const getShowImages = useCallback(() => {
        const images: Array<IShowImage> = [];

        artistsWithImagesForCurrentShow.forEach((artist) => {
            if (artist.showImages?.length) {
                images.push(...artist.showImages);
            }
        });

        return images;
    }, [artistsWithImagesForCurrentShow]);

    const getCurrentShowImages = useCallback(() => getShowImages().filter((showImage) =>
                    showImage.showName === process.env.REACT_APP_CURRENT_SHOW), []);

    const showImages = useMemo(() => getShowImages(), [getShowImages]);

    const currentShowImages = useMemo(() => getCurrentShowImages(), [getCurrentShowImages]);

    const currentShowImagesForHomePage = useMemo(() => currentShowImages.filter((showImage) => showImage.isOnHomePage), [currentShowImages]);

    return {
        artistsWithImagesForCurrentShow,
        showImages,
        currentShowImages,
        currentShowImagesForHomePage,
        getFullImagePath,
        getShowByName
    };
};

export default useImages;