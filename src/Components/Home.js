import React, { useEffect, useState } from 'react'
import News from './News';
import Pagination from '@mui/material/Pagination';

function Home(props) {

    const [news, setNews] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
  
    useEffect(()=>{
  
      handlePageNumber(null,1);
    },[]);
  
    async function handlePageNumber(event,page) {
  
      const url = `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page - 1}`;  
      const data = await fetch(url);
      const json = await data.json();
  
      setNews(json.hits);
      setPageNumber(page);
    }

  return (
    <div>
        <News news={news} page={pageNumber}/>
        <Pagination count={10} color="primary" onChange={handlePageNumber} />
    </div>
  )
}

export default Home