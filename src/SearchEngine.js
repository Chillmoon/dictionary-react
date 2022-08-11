import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine(props) {
  let [keyword, setKeyword] = useState(props.defaultWord);

  function showKeyword(response) {
    console.log(response);
    alert(`You are searching for ${response.data[0].word}`);
  }

  function handleSubmit(event) {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    event.preventDefault();
    axios.get(url).then(showKeyword);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="SearchEngine">
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
