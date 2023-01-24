import React from 'react';
import '../CSS/Comment.css'

function Comments(props) {

  const {author,_highlightResult,story_url,story_title} = props.item;

  const comment_text = (_highlightResult.comment_text != undefined) ? _highlightResult.comment_text.value : _highlightResult.story_text.value;


  return (
    <div className='comment-box'>
        <h1 style={{display: 'inline',color: '#696969',fontSize: '12px',fontFamily: 'Verdana,Geneva,sans-serif'}}>{author}</h1>
        <h1 style={{display: 'inline',color: '#696969'}}>|</h1>
        <a style={{display: 'inline',color: '#696969',fontSize: '12px'}}>on: {story_title}</a>
        {comment_text && <h1 >{comment_text}</h1>}
        <hr />
    </div>
  )
}

export default Comments