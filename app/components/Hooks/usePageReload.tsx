import { useEffect } from "react";

interface PageReloadProps {
  callback: () => void;
}

const usePageReload = (callback: () => void) => {
  useEffect(() => {
    const performanceEntries = performance.getEntriesByType(
      "navigation"
    ) as PerformanceNavigationTiming[];
    if (
      performanceEntries.length > 0 &&
      performanceEntries[0].type === "reload"
    ) {
      // ページがリロードされたときにコールバックを実行する
      callback();
    }
  }, [callback]);
};

export default usePageReload;
