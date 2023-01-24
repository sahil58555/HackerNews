import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div style ={{display: 'flex', background: 'red',alignContent: 'flex-start',fontSize: '20pt'}}>
        <Link to="/HackerNews" style={{paddingRight: '10px',paddingLeft: '10px', textDecoration: 'none'}}>Hacker News</Link>
        <Link to="/search" style={{textDecoration: 'none'}}>News</Link>
    </div>
  )
}

export default Navbar