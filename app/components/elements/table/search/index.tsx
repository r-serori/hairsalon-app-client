import { useState } from "react";

export const useSearchLogic = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return { search, handleSearch };
};
