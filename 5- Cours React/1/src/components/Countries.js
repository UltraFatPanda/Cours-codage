import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    // il faut toujours utiliser un use effect pour utiliser axios ?
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
          // on crée ici un evvenement comme avec addeventlistener ! ici l'éveènement est quand il y un changement dans la valeur de l'input, tu recherche la nouvelle valeur de rangeValue
        />
        {radios.map((continent) => (
          <li>
            <input
              type="radio"
              id={continent}
              name="continentRadio"
              checked={continent === selectedRadio}
              // cette ligne permet de faire en sorte que quand on annule le filtre, la checkbox est deselectionnée
              onChange={(e) => setSelectedRadio(e.target.id)}
              // on fait un map des differents labels qu'on a déjà mis dans un tableau puis on fait un map pour tous les lister, cela évite de les appeller un par un. Le fait que tous les inputs de type radio ai le meme name permet de faire en sorte qu'on ne puisse pas tous les cocher, cela les lie ensemble
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          Annuler la recherche
        </button>
      )}
      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
