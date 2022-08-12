import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <h3>{props.phonetic.text}</h3>
        <ReactAudioPlayer src={props.phonetic.audio} onPlay controls />
      </div>
    );
  } else {
    return null;
  }
}
