import React from 'react'

const TodoList = ({ todos, markTodo }) => {
  const todoItems = todos.length
  ? (
    todos.map(todo => {
      return (
        <div key={todo.id}>
          <span className={todo.active ? '' : 'active'}></span><span onClick={() => {markTodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
  )
  : (
    <p>You have no todo's left.</p>
  )

  return (
    <div>
      {todoItems}
    </div>
  )
}

export default TodoList
