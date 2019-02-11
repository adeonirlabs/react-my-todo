import React, { Component } from 'react'

class TodoItems extends Component {
  state = {
    edit: true
  }

  render() {
    const { entries, deleteItem, markItem } = this.props
    return entries.map(item => (
      <div key={item.id}>
        <span
          onClick={() => {
            markItem(item.id)
          }}
        >
          mark
        </span>
        <span>{item.done ? ` * ${item.text} * ` : item.text}</span>
        <span
          onClick={() => {
            deleteItem(item.id)
          }}
        >
          delete
        </span>
      </div>
    ))
  }
}

export default TodoItems
