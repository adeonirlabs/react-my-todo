import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import AddTodo from './AddTodo'
import TodoItem from './TodoItem'

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const Title = styled.h1`
  color: #636e72;
  text-align: center;
`

const Alert = styled.p`
  text-align: center;
  color: #636e72;
`

class TodoList extends Component {
  state = {
    items: [
      { id: Math.random(), text: 'Hello world', done: false },
      { id: Math.random(), text: 'Make coffee', done: true }
    ]
  }

  addItem = item => {
    let items = [...this.state.items, item]

    this.setState({
      items: _.sortBy(items, ['done'])
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
        <Title>React My Todo</Title>
        <AddTodo addItem={this.addItem} />
        {this.state.items.length === 0 ? (
          <Alert>You have no todo's left!</Alert>
        ) : (
          <TodoItem
            entries={this.state.items}
            markItem={this.markItem}
            deleteItem={this.deleteItem}
          />
        )}
      </Container>
    )
  }
}

export default TodoList
