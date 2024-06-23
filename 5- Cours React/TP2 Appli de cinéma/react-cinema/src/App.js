import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  const [FilmData, setFilmsData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR"
      )
      .then((res) => setFilmsData(res.data.results));
  });

  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
}

export default App;
