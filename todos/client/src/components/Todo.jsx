import React from 'react'

export default function Todo({todo, update, remove}) {
  
  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={()=>{
        update(todo.id)
      }}/> completed
      <p>{todo.title}</p>
      <button onClick={()=>{remove(todo.id)}}>x</button>
    </div>
  )
}
