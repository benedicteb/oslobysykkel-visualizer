import { useEffect, useRef } from "react";

/*
 * Shamelessly copied from:
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
const useInterval = (callback: () => void, delay: number | null): void => {
  const savedCallback = useRef(() => {});

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
