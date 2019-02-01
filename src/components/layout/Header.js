import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <header style={headerStyle}>
          <h1>Todo List</h1>
          <Link style={LinkStyle} to="/">Home</Link> | <Link style={LinkStyle}
          to="/about">About</Link>
      </header>
    </div>
  )
}

const LinkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontFamily: 'Arial',
    fontWeight: 'lighter',
    fontSize: 14,
    paddingBottom: '6px',
    display: 'inline-block'
}

const headerStyle = {
    background: '#000',
    color: '#fff',
    textAlign: 'center'
}