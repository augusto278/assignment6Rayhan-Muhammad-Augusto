import React, { useState } from "react";

const Search = ({ setQuery }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for movies..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
