type SearchBoxProps = {
  searchText: string;
  onSearchChange: (value: string) => void;
};

const SearchBox = ({ searchText, onSearchChange }: SearchBoxProps) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };
  const handleClearSearch = () => {
    onSearchChange("");
  };
  const trimmedSearchText = searchText.trim();
  const hasSearchText = trimmedSearchText.length > 0;
  const canSearch = trimmedSearchText.length >= 3;

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

      {hasSearchText && (
        <p>
          {canSearch
            ? "Ready to search profiles."
            : "Type at least 3 characters to search."}
        </p>
      )}

      <p>
        {hasSearchText
          ? `Searching for: ${trimmedSearchText}`
          : "Type something to search"}
      </p>
    </section>
  );
};

export default SearchBox;
