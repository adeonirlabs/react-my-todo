import React, { Component } from 'react'

import AddTodo from './AddTodo'
import TodoItems from './TodoItems'

class TodoList extends Component {
  state = {
    items: []
  }

  addItem = item => {
    let items = [...this.state.items, item]

    this.setState({
      items
    })
  }

  markItem = id => {
    this.setState(prevState => ({
      items: prevState.items.map(item => {
        if (item.id === id) {
          return { ...item, done: !item.done }
        }
        return item
      })
    }))
  }

  deleteItem = id => {
    const items = this.state.items.filter(item => {
      return item.id !== id
    })

    this.setState({
      items
    })
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <AddTodo addItem={this.addItem} />
        <TodoItems
          entries={this.state.items}
          deleteItem={this.deleteItem}
          markItem={this.markItem}
        />
      </div>
    )
  }
}

export default TodoList
