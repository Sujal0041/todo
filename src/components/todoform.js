import React, { useState } from 'react'

const todoform = () => {
  return (
    <form className='todoform'>
        <input type='text' className='todoinput' placeholder='Enter Todo'/>
        <button type='submit' className='addtodo'>Add Todo</button>
    </form>
  )
}

export default todoform
