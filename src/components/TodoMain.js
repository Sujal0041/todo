import React, { useState} from 'react'
import  TodoformData  from './TodoFormData'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
uuidv4()
const TodoMain = () => {
    const [todos,setTodos] = useState([])

    const addTodos = (todo) =>{
        setTodos([...todos,{id: uuidv4(),task:todo,completed:false}])
        console.log(todos)
    }
  return (
    <div className='todocontainer'>
      <TodoformData addTodo={addTodos}/>
      <Todo />
    </div>
  )
}

export default TodoMain
