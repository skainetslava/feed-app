import * as React from "react";

export const useAnimationFrame = (callback: Function): void => {
    const requestRef = React.useRef<number>(0);
    const previousTimeRef = React.useRef<number>(0);

    const animate = React.useCallback(
      (time: number): void => {
        if (previousTimeRef.current !== undefined) {
          callback();
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
      },
      [callback],
    );

    React.useEffect(() => {
      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current);
    }, [animate]);
  };
