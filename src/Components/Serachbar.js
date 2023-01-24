import React, { useEffect, useRef, useState } from 'react'
import '../CSS/Search.css'
import Pagination from '@mui/material/Pagination';
import Comments from './Comments';
import Stories from './Stories';

function Serachbar() {

    const [sort,setSort] = useState(`search_by_date`);
    const [tag, setTag] = useState('');
    const [pageNumber, setPageNumber] = useState(1);

    const [news, setNews] = useState([]);
    const pageRef = useRef(null);
  
    useEffect(()=>{
  
      fetchData();
    },[tag,sort,pageNumber]);
  
    async function fetchData() {

      const url = `https://hn.algolia.com/api/v1/${sort}?tags=${tag}&page=${pageNumber}`;

      const data = await fetch(url);
      const json = await data.json();
  
      setNews(json.hits);
    }

    async function handlePageNumber(event,pageNumber) {
  
      setPageNumber(pageNumber);
    }  

    async function handleQuery(event) {

        setTag(event.target.value);
    }

    function handleSort(event) {

        setSort(event.target.value);
    }

  return (
    <div >
        <span className='span-box'>Serachbar</span>
        <select className='search-box' onChange={handleQuery}>
            <option value="">ALL</option>
            <option value="story">Stories</option>
            <option value="comment">Comments</option>
        </select>
        <span className='span-box'>by</span>
        <select className='search-box' onChange={handleSort}>
            <option value="search_by_date">Date</option>
            <option value="search">Popularity</option>
        </select>

        <ul style={{listStyleType: 'none',paddingLeft: '0px'}}>
            {news.map((item)=>{

                return <li>{(item._tags[0] === 'story' || item._tags[0] === 'job') ? <Stories item={item}/> : <Comments item={item} />}</li>
            })}
        </ul>

        <Pagination count={10} color="primary" onChange={handlePageNumber} ref={pageRef} />
    </div>
  )
}

export default Serachbar