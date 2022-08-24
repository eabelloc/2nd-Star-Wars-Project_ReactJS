import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterPortait from "../components/CharacterPortait";
import "./Characters.css";

const Characters = () => {
  const [characterList, setCharacterList] = useState([]);

  const getCharacters = async () => {
    const raw = await axios.get(
      "https://starwars-server.vercel.app/characters"
    );
    setCharacterList(raw.data.data.characters);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <section className="characters">
      <h2>Characters</h2>
      <div className="gallery">
        {characterList.length > 0 ? (
          characterList.map((character) => (
            <CharacterPortait character={character} key={character._id} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default Characters;
