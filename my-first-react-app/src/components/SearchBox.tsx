import { useState } from "react";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  const handleClearSearch = () => {
    setSearchText("");
  };
  const hasSearchText = searchText.length > 0;
  const canSearch = searchText.length >= 3;

  return (
    <section>
      <h2>Search Profiles</h2>
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        value={searchText}
        onChange={handleSearchChange}
      />
      {hasSearchText && <button onClick={handleClearSearch}>Clear</button>}
      <p>
        {hasSearchText &&
          (canSearch
            ? "Ready to search profiles."
            : "Type at least 3 characters to search.")}
      </p>
      <p>
        {hasSearchText
          ? `Searching for: ${searchText}`
          : "Type something to search"}
      </p>
    </section>
  );
};

export default SearchBox;
