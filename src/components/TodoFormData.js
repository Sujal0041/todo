import React, { useState } from 'react'

const TodoFormData = () => {
  const [value,setValue] = useState("")
  return (
    <form className='todoform'>
        <input type='text' className='todoinput' placeholder='Enter Todo' onChange={(e) => console.log(e.target.value)}/>
        <button type='submit' className='addtodo'>Add Todo</button>
    </form>
  )
}

export default TodoFormData