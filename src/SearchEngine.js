import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function SearchEngine(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    event.preventDefault();
    axios.get(url).then(handleResponse);
    const pexelsKey =
      "563492ad6f9170000100000152303c3e19f447db923ce1e623ed2b50";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelsUrl, {
        headers: {
          Authorization: `token ${pexelsKey}`,
        },
      })
      .then(handlePexelsResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
