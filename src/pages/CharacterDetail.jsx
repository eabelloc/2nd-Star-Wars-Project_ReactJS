import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CharacterDetail.css";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(undefined);

  const getCharacter = async () => {
    const raw = await axios.get(
      `https://starwars-server.vercel.app/characters/${id}`
    );
    setCharacter(raw.data.data.characters);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <figure className="character-figure">
      {character !== undefined ? (
        <>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <h3>{character.role}</h3>
          <h3>{character.origin}</h3>
          <p>{character.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </figure>
  );
};

export default CharacterDetail;
