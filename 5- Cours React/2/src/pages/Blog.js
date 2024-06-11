import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import axios from "axios";
import Article from "../components/Article";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  const getData = () => {
    axios
      .get("http://localhost:3003/articles")
      .then((res) => setBlogData(res.data));
  };

  useEffect(() => getData(), []);
  // useffect veut dire quand le composant est entrain d'etre appellé je veux que tu montres ça

  const handleSubmit = (e) => {
    e.preventDefault();
    // permet d'empecher le rechargement de la page quand on valide le formulaire, on ne veut pas de rechargement de pages en react

    if (content.length < 140) {
      setError(true);
      // si le message posté fait moins de 140 caractères, active en true la constante error
    } else {
      axios.post("http://localhost:3004/articles", {
        author,
        content,
        date: Date.now(),
      });
      setError(false);
      setAuthor("");
      setContent("");
      getData();
    }
  };

  return (
    <div className="blog-container">
      <Logo />
      <Navigation />
      <h1>Blog</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        {/* on lui dit quand tu veut submit un texte, tu joue la fonction handleSubmit pour vérifier le texte */}
        <input
          type="text"
          placeholder="Nom"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <textarea
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          // permet de mettre les border en rouge quand error est true
          placeholder="Message"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
        {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
        {/* veut dire si error est true tu m'affiche le texte d'erreur */}
        <input type="submit" value="Envoyer" />
      </form>
      <ul>
        {blogData
          .sort((a, b) => b.date - a.date)
          .map((article) => (
            <Article key={article.id} article={article} />
          ))}
      </ul>
    </div>
  );
};

export default Blog;
