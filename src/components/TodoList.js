import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import AddTodo from './AddTodo'
import TodoItems from './TodoItems'

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const Title = styled.h1`
  color: #636e72;
  text-align: center;
`

class TodoList extends Component {
  state = {
    items: [{ id: Date.now(), text: 'Hello world', done: false }]
  }

  addItem = item => {
    let items = [...this.state.items, item]

    this.setState({
      items
    })
  }

  markItem = id => {
    this.setState(prevState => ({
      items: _.sortBy(
        prevState.items.map(item => {
          if (item.id === id) {
            return { ...item, done: !item.done }
          }
          return item
        }),
        ['done']
      )
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
      <Container>
        <Title>React ToDo</Title>
        <AddTodo addItem={this.addItem} />
        <TodoItems
          entries={this.state.items}
          deleteItem={this.deleteItem}
          markItem={this.markItem}
        />
      </Container>
    )
  }
}

export default TodoList
