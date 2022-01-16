import { useCallback, useEffect, useState } from "react";

const useMediaQuery = (width: number) => {
  const [isLargeScreeen, setIsLargeScreen] = useState<boolean>(true);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setIsLargeScreen(false);
    } else {
      setIsLargeScreen(true);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setIsLargeScreen(false);
    }

    return () => media.removeListener(updateTarget);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLargeScreeen;
};

export { useMediaQuery };
