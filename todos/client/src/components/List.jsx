import React from 'react'
import Todo from './Todo'

export default function List({arr, update, remove}) {
  return (
    <div>
      {arr.map(todo=><Todo todo={todo} update={update} remove={remove} />)}
    </div>
  )
}
