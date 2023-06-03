import './App.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect, useState} from 'react';
import Feed from './components/Feed';
import Weather from './components/Weather';
import { Information } from './components/Information.jsx';
function App() {

  const [articles, setArticles] = useState([])
  console.log(articles)
  const getArticles = async () => {
    try{
      const res = await axios.get("http://localhost:4000/")
      setArticles(res.data)

    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    getArticles()
  },[])
// Función para desplazarse automáticamente hacia abajo
function scrollDown() {
  const container = document.getElementById('Appp');
  container.scrollTo({
    top: container.scrollHeight,
    behavior: 'smooth'
  });
}

// Función para desplazarse automáticamente hacia arriba
function scrollUp() {
  const container = document.getElementById('Appp');
  container.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Temporizador para desplazarse automáticamente hacia abajo cada 3 segundos
setInterval(scrollDown, 3000);
setInterval(scrollUp, 3000);


  return (
    <div id="Appp" className="App">
    <header className="App-header">
      <div className="container">
        <div className="col-9 card-information">
          <Information/>
        </div>
        
        <div className="col-3 card-information">
          <div className='row box-content-up'>
            <div className='content-wheater clearfix'>
             <Weather/>
            </div>
          </div>
          <div className='row box-content-down'>
          <div className='content-news'>
            <p>
        Israel Today
        </p>
        {articles.map((item,i) => 
          <Feed
            key={i}
            title={item.item.title}
            link = {item.item.link}
            date = {item.item.pubDate}
          />
        
        )}
          </div>
          </div>
        </div>
    </div>

      </header>
    </div>
  );
}

export default App;
