import { RefObject, useLayoutEffect, useState } from 'react';

export const useTruncatedElement = <T extends RefObject<HTMLElement>>(ref: T) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [isReadingMore, setIsReadingMore] = useState(false);

  useLayoutEffect(() => {
    const messageWidth = ref?.current?.getBoundingClientRect().width ?? 0;
    const containerWidth = ref.current?.parentElement?.getBoundingClientRect().width ?? 0;
    setIsTruncated(messageWidth > containerWidth);
  }, []);
  return {
    isTruncated,
    isReadingMore,
    setIsReadingMore,
  };
};
