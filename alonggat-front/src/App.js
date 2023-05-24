import './App.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect, useState} from 'react';
import Feed from './components/Feed';
import Weather from './components/Weather';
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
  

  return (
    <div className="App">
    <header className="App-header">
      <div class="container">
        <div class="col-9">
          <div class="content">
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
        
        <div class="col-3">
          <div className='row'>
            <div class="contentRow">
             <Weather/>
            </div>
          </div>
          <div className='row'>
          <div class="contentRow">
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
