import React from 'react'
import '../Card.css';

function Card(props) {

  const {title,author,url,points,index} = props;

  const domain = extractDomainFromUrl(url);

  function extractDomainFromUrl(url) {

    if(!url) return "";

    console.log(url);

    if(url.startsWith("https")) {
        url = url.replace("https://",'').replace("www.",'');
    }
    else{
        url = url.replace("http://",'').replace("www.",'');
    }

    return url.substring(0,url.indexOf('/'));
  }

  return (
    <div className='box-card'>
        <div >
            <h3 className='inner-box-card' style={{display: 'inline'}}> {title}</h3>
            {domain && <a className='inner-box-card' style={{display: 'inline',textDecoration: 'none',color: '#828282'}} href={url}> ({domain})</a>}
            <h1 className='inner-box-card span-card'>{points} points by {author}</h1>
        </div>
    </div>
  )
}

export default Card