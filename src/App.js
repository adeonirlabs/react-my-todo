import React, { Component } from 'react';
import styled from 'styled-components'

import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
`

const Title = styled.h1`
  font-size: 48px;
  color: #e5e5e5;
  text-align: center;
`

const Wrapper = styled.div`
  border-radius: 3px;
  background-color: #e5e5e5;
  padding: 40px;
  display: flex;
  flex-direction: column;
`

class App extends Component {
  state = {
    todos: [
      { id: Math.random(), content: 'buy some milk', active: true },
      { id: Math.random(), content: 'make coffee', active: true },
    ]
  }

  markTodo = (id) => {
    this.setState( prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {...todo, active: !todo.active }
        }
        return todo
      })
    }))
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    todo.active = true
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  render() {
    return (
      <Container>
        <Title>React ToDo</Title>
        <Wrapper>
          <AddTodo addTodo={this.addTodo} hello='hello' />
          <TodoList todos={this.state.todos} markTodo={this.markTodo} />
        </Wrapper>
      </Container>
    )
  }
}

export default App
