import { useCallback, useMemo, useState } from 'react';
import { artists } from '../data/artists';
import { IArtwork } from '../models/Artwork';
import { IShowImage } from '../models/Show';
import { shows } from '../data/shows';

const useImages = () => {
    const getFullImagePath = (relativePath: string, folder = 'artists') => `${process.env.REACT_APP_URL}/images/${folder}/${relativePath}`;

    const getShowByName = useCallback((name: string) => {
        return shows.filter((a) => a.name === name).length
            ? shows.filter((a) => a.name === name)[0]
            : null
    }, [shows]);

    // TODO: Remove all this ga'bage and just get show images from shows.ts
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

    const getShowImagesByName = useCallback((showName: string) => getShowImages().filter((showImage) =>
        showImage.showName === showName), []);

    const showImages = useMemo(() => getShowImages(), [getShowImages]);

    const currentShowImages = useMemo(() => getCurrentShowImages(), [getCurrentShowImages]);

    const currentShowImagesForHomePage = useMemo(() => currentShowImages.filter((showImage) => showImage.isOnHomePage), [currentShowImages]);

    return {
        artistsWithImagesForCurrentShow,
        showImages,
        currentShowImages,
        currentShowImagesForHomePage,
        getFullImagePath,
        getShowByName,
        getShowImagesByName
    };
};

export default useImages;