import { useState } from 'react';

export default function useSearchCollection(collections) {
  const [inputSearch, setInputSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchChange = (e) => {
    const sarchValue = e.target.value;
    setInputSearch(sarchValue);

    if (sarchValue.trim() === "") {
      setIsSearching(false);
      setSearchResults([]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoadingSearch(true);

    const filteredCollections = collections.filter((collection) =>
      collection.title.toLowerCase().includes(inputSearch.toLowerCase().trim())
    );
    
    // setTimeout(() => {
    //   setIsLoadingSearch(false);
    // }, 3000);
    setIsLoadingSearch(false);
    setIsSearching(true);
    setSearchResults(filteredCollections);
  };

  return { handleSearchChange, handleSearch, searchResults, isLoadingSearch, isSearching }
}
