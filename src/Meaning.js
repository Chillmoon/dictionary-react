import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="section">
        <h1>{props.meaning.partOfSpeech}</h1>
        <h4>definitions:</h4>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                {index + 1}. {definition.definition}
              </p>

              <em>{definition.example}</em>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
