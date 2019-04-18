import React, { Component } from 'react'
import styled from 'styled-components'

import plusIcon from '../assets/plus-icon.svg'

const Form = styled.form`
  display: flex;
  margin-bottom: 20px;
`

const Input = styled.input`
  background-color: #fff;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border: 0;
  color: #636e72;
  flex: 1;
  font-size: 16px;
  height: 46px;
  outline: 0;
  padding: 0 20px;
`

const Button = styled.button`
  align-items: center;
  background-color: #0984e3;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  height: 46px;
  justify-content: center;
  opacity: 1;
  outline: 0;
  transition: opacity 0.2s ease;
  width: 46px;

  :hover {
    opacity: 0.6;
  }

  :active {
    opacity: 0.8;
  }
`

class AddTodo extends Component {
  state = {
    text: ''
  }

  handleChange = e => {
    this.setState({
      id: Math.random(),
      text: e.target.value,
      done: false
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.text === '') {
      return
    }

    this.props.addItem(this.state)
    this.setState({ text: '' })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Add new task"
        />
        <Button>
          <img src={plusIcon} alt="Add button" />
        </Button>
      </Form>
    )
  }
}

export default AddTodo
