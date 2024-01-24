import React from 'react'

const Todo = ({task, toggleComplete}) => {
  return (
    <div className='Todo'>
       <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>    
    </div>
  )
}

export default Todo
