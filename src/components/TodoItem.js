import React, { Component } from 'react'
import styled from 'styled-components'

import trashIcon from '../assets/trash-icon.svg'

const Container = styled.div`
  align-items: center;
  opacity: ${props => (props.checked ? 0.4 : 1)};
  background-color: #ecf0f199;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  height: 46px;
  margin-bottom: 10px;
  padding: 0 20px;
  transition: all 0.2s ease;
`

const CheckBox = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  padding-left: 20px;
  position: relative;
`

const CheckInput = styled.input`
  border: 0;
  display: none;
`

const CheckMark = styled.span`
  background-color: ${props => (props.checked ? '#0984e3' : '#fff')};
  border-radius: 10px;
  border: 3px solid #0984e3;
  cursor: pointer;
  height: 20px;
  left: 0;
  position: absolute;
  transition: all 0.2s ease;
  width: 20px;

  :hover {
    opacity: 0.6;
  }
`

const Text = styled.span`
  color: #636e72;
  padding: 5px;
  position: relative;
  text-decoration: ${props => (props.checked ? 'line-through' : '')};
  top: 1px;
  user-select: none;
`

const DeleteButton = styled.span`
  cursor: pointer;
  opacity: 0.5;
  position: relative;
  transition: all 0.2s ease;
  top: 2px;

  :hover {
    opacity: 1;
  }
`

class TodoItem extends Component {
  render() {
    const { entries, markItem, deleteItem } = this.props
    return entries.map(item => (
      <Container key={item.id} checked={item.done}>
        <CheckBox>
          <CheckInput
            type="checkbox"
            checked={item.done}
            onChange={() => {
              markItem(item.id)
            }}
          />
          <CheckMark
            checked={item.done}
            onClick={() => {
              markItem(item.id)
            }}
          />
          <Text checked={item.done}>{item.text}</Text>
        </CheckBox>
        <div>
          <DeleteButton
            onClick={() => {
              deleteItem(item.id)
            }}
          >
            <img src={trashIcon} alt="Delete task" />
          </DeleteButton>
        </div>
      </Container>
    ))
  }
}

export default TodoItem
