import { useState } from "react";

export const usePaginationLogic = () => {
  const [pagination, setPagination] = useState({
    page: 0,
    size: 10,
  });

  const handlePageChange = (page) => {
    setPagination({ ...pagination, page });
  };

  return { pagination, handlePageChange };
};
