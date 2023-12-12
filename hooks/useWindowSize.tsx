import { useState, useEffect } from 'react';

type WindowSize = {
    width: number;
    height: number;
};

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        function handleWindowSizeChange() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        const mediaQueryList = window.matchMedia('(min-width: 768px)');

        handleWindowSizeChange();

        const mediaQueryHandler = (event: MediaQueryListEvent) =>
            handleWindowSizeChange();

        mediaQueryList.addEventListener('change', mediaQueryHandler);

        return () => {
            mediaQueryList.removeEventListener('change', mediaQueryHandler);
        };
    }, []);

    return windowSize;
};