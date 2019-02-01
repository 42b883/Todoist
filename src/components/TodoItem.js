import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#abc',
            padding: '15px',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none',
            borderBottom: '1px #ccc dotted',
            marginBottom: 1
        }
    }

  
    
  render() {
      const {id, title} = this.props.todo
    return (
      <div style={this.getStyle()}>
        <input type="checkbox"
        onChange={this.props.markComplete.bind(this, id)}  /> {' '}
        <p>{title}</p>
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }

//   const itemStyle = {
//       backgroundColor: '#f1cccc'
//   }

const btnStyle  = {
    background: '#577',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    float: 'right',
    borderRadius: '50%',
    marginTop: '-35px'

}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.array.isRequired,
    markComplete:  PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
  }

export default TodoItem
