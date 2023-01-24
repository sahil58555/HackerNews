import React from 'react'

function Stories(props) {

  const {author,url,title} = props.item;

  return (
    <div>
        <h1 style={{display: 'inline',color: '#696969',fontSize: '12px',fontFamily: 'Verdana,Geneva,sans-serif'}}>{author}</h1>
        <h1 style={{display: 'inline',color: '#696969',fontSize: '12pt'}}>|</h1>
        <a style={{display: 'inline',color: '#696969',fontSize: '12px',textDecoration: 'none'}} href={url}>on: {title}</a>
        <hr />
    </div>
  )
}

export default Stories