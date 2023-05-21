import React, { useEffect, useState } from 'react';
import rssToJson from 'rss-to-json';

const NewsFeed = () => {
  const [feedItems, setFeedItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://www.nytimes.com/rss'; // Replace with your RSS feed URL
      try {
        const rss = await rssToJson.load(url);
        setFeedItems(rss.items);
      } catch (error) {
        console.error('Error loading RSS feed:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>News Feed</h1>
      <ul>
        {feedItems.map((item, index) => (
          <li key={index}>
            <a href={item.url}>{item.title}</a>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;



// import React, { useEffect, useState } from 'react';
// import Parser from 'rss-parser';

// const NewsFeed = () => {
//   const [feedItems, setFeedItems] = useState([]);

//   useEffect(() => {
//     const parser = new Parser();

//     const fetchData = async () => {
//       const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
//       const feedURL = 'https://rss.nytimes.com/services/xml/rss/nyt/MiddleEast.xml'; // Reemplaza con la URL del feed RSS que deseas mostrar

//       try {
//         const feed = await parser.parseURL(CORS_PROXY + feedURL);
//         setFeedItems(feed.items);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Feed de Noticias</h1>
//       {feedItems.map((item) => (
//         <div key={item.guid}>
//           <h2>{item.title}</h2>
//           <p>{item.contentSnippet}</p>
//           <a href={item.link} target="_blank" rel="noopener noreferrer">
//             Leer más
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NewsFeed;
