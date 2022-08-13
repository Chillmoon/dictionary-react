import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function SearchEngine(props) {
  let [keyword, setKeyword] = useState(props.defaultWord);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response);
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    event.preventDefault();
    axios.get(url).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input
          className="rounded"
          type="search"
          autoFocus={true}
          placeholder="Enter the word"
          onChange={handleKeywordChange}
        ></input>
        <button type="submit" className="rounded">
          Search
        </button>
      </form>

      <Results results={results} />
    </div>
  );
}
