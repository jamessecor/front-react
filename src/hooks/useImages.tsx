import { useCallback, useMemo } from 'react';
import { shows } from '../data/shows';

const useImages = () => {
    const getFullImagePath = (relativePath: string, folder = 'artists') => `${import.meta.env.VITE_URL}/images/${folder}/${relativePath}`;

    const getShowByName = useCallback((name: string) => {
        return shows.filter((a) => a.name === name).length
            ? shows.filter((a) => a.name === name)[0]
            : null
    }, [shows]);

    const getCurrentShow = useCallback(() => shows.find((show) => (show.endDate && show.endDate >= new Date())
        && (show.startDate && show.startDate <= new Date())), []);

    const getHighestNumberedShow = useCallback(() => shows.sort((a, b) => b.number - a.number)[0] ?? {}, []);

    const currentShow = useMemo(() => getCurrentShow() ?? getHighestNumberedShow(), [getCurrentShow]);
    const currentShowImages = useMemo(() => currentShow.images, [currentShow]);
    const currentShowFeaturedImage = useMemo(() => currentShow.featuredImage, [currentShow]);

    return {
        currentShow,
        currentShowImages,
        currentShowFeaturedImage,
        getFullImagePath,
        getShowByName
    };
};

export default useImages;