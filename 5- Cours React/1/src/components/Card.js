import React from "react";

const Card = ({ country }) => {
  // en mettant les parenthèse on destructure et permet de faire passer l'infromation du parent à l'enfant (car country est le parent de mcard)
  return (
    <li className="card">
      <img
        src={country.flags.svg}
        alt={"drapeau " + country.translations.fra.common}
      />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        <h4>{country.capital}</h4>
        <p>Pop. {country.population.toLocaleString()}</p>
      </div>
    </li>
  );
};

export default Card;
