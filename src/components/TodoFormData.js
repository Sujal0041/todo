import React, { useState } from 'react'

const TodoFormData = ({addTodo}) => {
  const [value,setValue] = useState("")

  const handleInputChange = (e) => {
    // Update the 'value' with the current value of the input field
    setValue(e.target.value);
  };

  const handlesubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    addTodo(value)
    setValue("") // After clicking the button, clear the input field
  };

  return (
    <form className='todoform' onSubmit={handlesubmit}>
        <input type='text' className='todoinput'value={value} placeholder='Enter Todo'  onChange={handleInputChange}/>
        <button type='submit' className='addtodo'>Add Todo</button>
    </form>
  )
}

export default TodoFormData