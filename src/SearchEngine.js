import React, { useState } from "react";

export default function SearchEngine(props) {
  let [keyword, setKeyword] = useState(props.defaultWord);
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div classname="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Enter the word"
          onChange={handleKeywordChange}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
