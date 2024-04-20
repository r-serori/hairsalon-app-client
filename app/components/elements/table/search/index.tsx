import { useState } from "react";

export const useSearchLogic = () => {
  const [searchText, setSearchText] = useState("");
  const [searchField, setSearchField] = useState("");

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchFieldChange = (event) => {
    setSearchField(event.target.value);
  };

  return {
    searchText,
    setSearchText,
    searchField,
    setSearchField,
    handleSearchTextChange,
    handleSearchFieldChange,
  };
};
