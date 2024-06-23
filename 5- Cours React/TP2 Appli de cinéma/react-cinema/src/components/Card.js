import React from "react";

const Cards = ({ Film }) => {
  const Genre = [
    { id: 28, name: "Action" },
    { id: 12, name: "Aventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comédie" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentaire" },
    { id: 18, name: "Drame" },
    { id: 10751, name: "Familial" },
    { id: 14, name: "Fantastique" },
    { id: 36, name: "Histoire" },
    { id: 27, name: "Horreur" },
    { id: 10402, name: "Musique" },
    { id: 9648, name: "Mystère" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science-Fiction" },
    { id: 10770, name: "Téléfilm" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "Guerre" },
    { id: 37, name: "Western" },
  ];

  const getGenreNameById = (id) => {
    const genre = Genre.find((genre) => genre.id === id);
    return genre ? genre.name : "Unknown";
  };

  const dateFormater = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    return newDate;
  };

  return (
    <div className="card">
      <img
        src={
          Film.poster_path
            ? "https://image.tmdb.org/t/p/original" + Film.poster_path
            : "./img/poster.jpg"
        }
        alt="poster du film"
      />
      <h2>{Film.title}</h2>
      <h5>Sorti le : {dateFormater(Film.release_date)}</h5>
      <h4> {Film.vote_average.toPrecision(2)} / 10</h4>
      <ul>
        {" "}
        {Film.genre_ids.map((id) => (
          <li key={id}>{getGenreNameById(id)}</li>
        ))}
      </ul>
      <h3>Synopsis </h3>
      <p>{Film.overview}</p>
      <button className="btn">Ajouter aux coups de coeur</button>
    </div>
  );
};

export default Cards;
