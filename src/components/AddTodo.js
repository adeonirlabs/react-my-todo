import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    text: ''
  }

  handleChange = e => {
    this.setState({
      id: Date.now(),
      text: e.target.value,
      done: false
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addItem(this.state)
    this.setState({ text: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button>+</button>
      </form>
    )
  }
}

export default AddTodo
