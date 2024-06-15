// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [Data, setData] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
//       .then((res) => console.log(res.data))
//       .then((res) => setData(res.data));
//   }, []);

//   return (
//     <div>
//       <div className="App-header">
//         <h1>React Cook </h1>
//       </div>

//       <input type="text" placeholder="Tapez un aliment" />

//       <ul>
//         {Data.map((meals) => (
//           <li key={meals.idMeal}>{meals.meals}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const App = () => {
  const [Data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        console.log(res.data);
        setData(res.data.meals || []);
      } catch (error) {
        console.error("Erreur lors de la récupération des données : ", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <div className="App-header">
        <h1>React Cook </h1>
      </div>

      <input
        type="text"
        placeholder="Tapez un aliment"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {Data.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </ul>
    </div>
  );
};

export default App;
