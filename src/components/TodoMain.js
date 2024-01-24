import React, { useState} from 'react'
import  TodoformData  from './TodoFormData'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
uuidv4()
const TodoMain = () => {
    const [todos,setTodos] = useState([])

    const addTodos = (todo) => {
        // Check if todo is not empty before adding it to the array
        if (todo.trim() !== "") {
            setTodos([...todos, { id: uuidv4(), task: todo, completed: false }])
            console.log(todos)
        } else {
            alert("Please Add a Task")
        }
    }
    

    const toggleComplete = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      }

  return (
    <div className='todocontainer'>
      <TodoformData addTodo={addTodos}/>
      {todos.map((todo, index)=>(
        <Todo task={todo} key={index} toggleComplete={toggleComplete} />
          
      ))}
    </div>
  )
}

export default TodoMain
