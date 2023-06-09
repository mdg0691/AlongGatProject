import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import Feed from "./components/Feed";
import Weather from "./components/Weather";
import { Information } from "./components/Information.jsx";
function App() {
  const [articles, setArticles] = useState([]);

  console.log(articles);

  const getArticles = async () => {
    try {
      // const res = await axios.get("https://alonggat-back.vercel.app/");
      const res = await axios.get("http://localhost:4000/");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Fetch data initially
    getArticles();

    // Fetch data every 10 minutes
    const interval = setInterval(() => {
      getArticles();
    }, 5 * 60 * 1000); // 10 minutes in milliseconds

    // Clean up the interval when the component unmounts or when the dependency array changes
    return () => clearInterval(interval);
  }, []);

  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Incrementa el contador para forzar la actualización del componente
      setRefreshCount((prevCount) => prevCount + 1);
    }, 600000); // 10 minutos en milisegundos

    // Limpia el intervalo cuando el componente se desmonte
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div id="Appp" className="App">
      <body className="App-header">
        <div className="container">
          <div className="col-9 card-information">
            <Information />
          </div>

          <div className="col-3 card-information">
            <img
              src={process.env.PUBLIC_URL + "/SiemensEnergyIcon.jpg"}
              alt="Imagen Siemens Energy"
            />
            {/* <Weather /> */}
            <Weather key={refreshCount} /> {/* Agrega un key con el contador para forzar la actualización */}
          </div>
        </div>

        <footer>
          <div class="slider">
            <div class="slide-track">
              {articles.map((item, i) => (
                <Feed
                  key={i}
                  title={item.item.title}
                  link={item.item.link}
                  date={item.item.pubDate}
                />
              ))}
            </div>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default App;
