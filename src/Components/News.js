import React, { useEffect, useState } from 'react'
import Card from './Card'

function News(props) {

  const {news,page} = props;
  const currPageNumber = (page - 1) * 20 + 1;

  return (
    <ol start={currPageNumber}>
        {news.map((item,index)=>{
            return <li><Card title={item.title} author={item.author} url={item.url} points={item.points} index={index}></Card></li>
        })}
    </ol>
  )
}

export default News