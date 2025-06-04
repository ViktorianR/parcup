import { useCallback, useLayoutEffect, useRef } from "react";

/* NATIVE useEvent from v.18 React */
const useEvent = handler => {
    const handleRef = useRef(null);

    useLayoutEffect(() => {
        handleRef.current = handler;
    });

    return useCallback((...args) => {
        return handleRef.current(...args);
    }, []);
};

export default useEvent;
