const getData = () => {
  axios
    .get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    .then((res) => setBlogData(res.data));
};

useEffect(() => getData(), []);
