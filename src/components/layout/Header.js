import React from 'react'

export default function Header() {
  return (
    <div>
      <header style={headerStyle}>
          <h1>Todo List</h1>
      </header>
    </div>
  )
}

const headerStyle = {
    background: '#000',
    color: '#fff',
    textAlign: 'center'
}