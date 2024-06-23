import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Form = () => {
  const [FilmData, setFilmsData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  // const TopToFlop = () => {
  //   const sortedData = [...FilmData].sort(
  //     (a, b) => b.vote_average - a.vote_average
  //   );
  //   setFilmsData(sortedData);

  //   const FlopToTop = () => {
  //     FilmData.sort((a, b) => a.vote_average < b.vote_average);
  //   };

  const TopToFlop = () => {
    const sortedData = [...FilmData].sort(
      (a, b) => b.vote_average - a.vote_average
    );
    setFilmsData(sortedData);
  };

  const FlopToTop = () => {
    const sortedData = [...FilmData].sort(
      (a, b) => a.vote_average - b.vote_average
    );
    setFilmsData(sortedData);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${inputSearch}&language=fr-FR`
      )
      .then((res) => setFilmsData(res.data.results));
  }, [inputSearch]);

  return (
    <div>
      <div className="form-component">
        <div className="form-container">
          <form>
            <input
              type="text"
              placeholder="Entrez le nom d'un film"
              onChange={(e) => setInputSearch(e.target.value)}
            />
            <input type="submit" />
          </form>
        </div>
        <div className="btn-sort-container">
          <button id="goodToBad" onClick={() => TopToFlop()}>
            <span>
              {" "}
              <p>Top</p>
              <img src="./arrow-up-solid (2).svg" alt="fleche montante" />
            </span>
          </button>
          <button id="badToGood" onClick={() => FlopToTop()}>
            <span>
              <p>Flop</p>
              <img src="./arrow-up-solid (3).svg" alt="fleche descendante" />
            </span>
          </button>
        </div>
      </div>
      <div className="result">
        {FilmData.map((Film) => (
          <Card key={Film.id} Film={Film} />
        ))}
      </div>
    </div>
  );
};

export default Form;
