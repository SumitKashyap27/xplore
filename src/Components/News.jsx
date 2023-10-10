// there is an issue in this code that fetching news ius blocked by coer problem by which it can be solved by using proxy server where we need to render data on another server like local host3001 and then to this server this can be done by node and explress js 
// import React, { useState, useEffect } from 'react';
// import { Paper, Typography, Link, CircularProgress } from '@mui/material';

// const News = () => {
//   const [nasaNews, setNasaNews] = useState([]);
//   const [isroNews, setIsroNews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch NASA news data from the NASA RSS feed
//     fetch('https://www.jpl.nasa.gov/feeds/news/')
//       .then((response) => response.text())
//       .then((data) => {
//         // Parse the XML data from the NASA RSS feed
//         const parser = new DOMParser();
//         const xmlDoc = parser.parseFromString(data, 'text/xml');
//         const items = xmlDoc.querySelectorAll('item');

//         const nasaNewsItems = Array.from(items).map((item) => ({
//           title: item.querySelector('title').textContent,
//           link: item.querySelector('link').textContent,
//           description: item.querySelector('description').textContent,
//         }));

//         setNasaNews(nasaNewsItems);
//       })
//       .catch((error) => {
//         console.error('Error fetching NASA news:', error);
//       });

//     // Fetch ISRO news data from the ISRO RSS feed
//     fetch('https://mosdac.gov.in/isrocast.xml')
//       .then((response) => response.text())
//       .then((data) => {
//         // Parse the XML data from the ISRO RSS feed
//         const parser = new DOMParser();
//         const xmlDoc = parser.parseFromString(data, 'text/xml');
//         const items = xmlDoc.querySelectorAll('item');

//         const isroNewsItems = Array.from(items).map((item) => ({
//           title: item.querySelector('title').textContent,
//           link: item.querySelector('link').textContent,
//           description: item.querySelector('description').textContent,
//         }));

//         setIsroNews(isroNewsItems);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching ISRO news:', error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <Paper style={{ backgroundColor: '#222', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
//       <Typography variant="h4" style={{ color: '#fff', marginBottom: '20px' }}>
//         NASA News
//       </Typography>
//       {loading ? (
//         <CircularProgress style={{ color: '#00bfff' }} />
//       ) : (
//         <ul style={{ listStyleType: 'none', padding: 0 }}>
//           {nasaNews.map((newsItem, index) => (
//             <li key={index} style={{ marginBottom: '20px' }}>
//               <Paper style={{ backgroundColor: '#333', padding: '10px', borderRadius: '5px' }}>
//                 <Typography variant="h5" style={{ color: '#fff' }}>
//                   {newsItem.title}
//                 </Typography>
//                 <Typography style={{ color: '#fff', marginBottom: '10px' }}>
//                   {newsItem.description}
//                 </Typography>
//                 <Link href={newsItem.link} target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff', textDecoration: 'none' }}>
//                   Read More
//                 </Link>
//               </Paper>
//             </li>
//           ))}
//         </ul>
//       )}

//       <Typography variant="h4" style={{ color: '#fff', marginTop: '20px', marginBottom: '20px' }}>
//         ISRO News
//       </Typography>
//       {loading ? (
//         <CircularProgress style={{ color: '#00bfff' }} />
//       ) : (
//         <ul style={{ listStyleType: 'none', padding: 0 }}>
//           {isroNews.map((newsItem, index) => (
//             <li key={index} style={{ marginBottom: '20px' }}>
//               <Paper style={{ backgroundColor: '#333', padding: '10px', borderRadius: '5px' }}>
//                 <Typography variant="h5" style={{ color: '#fff' }}>
//                   {newsItem.title}
//                 </Typography>
//                 <Typography style={{ color: '#fff', marginBottom: '10px' }}>
//                   {newsItem.description}
//                 </Typography>
//                 <Link href={newsItem.link} target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff', textDecoration: 'none' }}>
//                   Read More
//                 </Link>
//               </Paper>
//             </li>
//           ))}
//         </ul>
//       )}
//     </Paper>
//   );
// };

// export default News;
