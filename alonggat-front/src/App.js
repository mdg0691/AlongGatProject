import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'
import Feed from './components/Feed'
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
        <h2>
          Israel Today
        </h2>
        <div className='conteiner'>
          <div className='column'>
          {articles.map((item,i) => 
                  <Feed
                    key={i}
                    title={item.item.title}
                    link = {item.item.link}
                    date = {item.item.pubDate}
                  />
                )}
          </div>
          <div className='column'>
          {articles.map((item,i) => 
                  <Feed
                    key={i}
                    title={item.item.title}
                    link = {item.item.link}
                    date = {item.item.pubDate}
                  />
                )}
          </div>
          <div className='column'>
            <div className='row'>
              <div className='col'>
              {articles.map((item,i) => 
                  <Feed
                    key={i}
                    title={item.item.title}
                    link = {item.item.link}
                    date = {item.item.pubDate}
                  />
                )}    
              </div> 
              <div className='col'>
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
