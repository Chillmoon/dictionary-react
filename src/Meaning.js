import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h2>{props.meaning.partOfSpeech}</h2>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {index + 1}. {definition.definition}
            </p>

            <em>{definition.example}</em>
          </div>
        );
      })}

      <hr />
    </div>
  );
}
