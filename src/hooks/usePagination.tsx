import { useState, useCallback } from 'react';

interface UsePaginationOptions {
  initialItemsPerPage?: number;
  incrementBy?: number;
}

const usePagination = <T,>(allItems: T[], options: UsePaginationOptions = {}) => {
  const {
    initialItemsPerPage = 8,
    incrementBy = 8,
  } = options;

  const [displayCount, setDisplayCount] = useState(initialItemsPerPage);
  const totalItems = allItems.length;
  const hasMore = displayCount < totalItems;

  const loadMore = useCallback(() => {
    setDisplayCount(prev => Math.min(prev + incrementBy, totalItems));
  }, [incrementBy, totalItems]);

  const showAll = useCallback(() => {
    setDisplayCount(totalItems);
  }, [totalItems]);

  const reset = useCallback(() => {
    setDisplayCount(initialItemsPerPage);
  }, [initialItemsPerPage]);

  const paginatedItems = allItems.slice(0, displayCount);

  return {
    paginatedItems,
    displayCount,
    totalItems,
    hasMore,
    loadMore,
    showAll,
    reset,
  };
};

export default usePagination;