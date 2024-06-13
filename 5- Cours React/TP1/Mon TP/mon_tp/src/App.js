import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=All")
      .then((res) => console.log(res.data));
  }, []);
  return (
    <div>
      <div className="App-header">
        <h1>React Cook </h1>
      </div>
      <div>
        <input type="text" placeholder="Tapez un aliment" />
      </div>
    </div>
  );
};

export default App;
