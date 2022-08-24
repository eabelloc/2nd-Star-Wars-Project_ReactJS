import React from "react";
import { Link } from "react-router-dom";
import "./CharacterPortrait.css";

const CharacterPortait = ({ character }) => {
  return (
    <Link to={`/characters/${character._id}`}>
      <figure className="character-portrait">
        <img src={character.portrait} alt={character.name} />
      </figure>
    </Link>
  );
};

export default CharacterPortait;
