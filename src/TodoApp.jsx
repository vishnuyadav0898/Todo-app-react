import React from 'react'
import { useState } from 'react'

export const TodoApp = () => {
  const[todo,settodo] = useState([]);
  const [inputValue,setInputValue] = useState("")
  const addtodo = ()=>{
    if (inputValue.trim()!=='') {
      settodo([...todo,inputValue])
      setInputValue('')
    }
  }
  const deleteTodo = (index)=>{
    const newtodo = todo.filter((todo_,i)=>i!==index);
    settodo(newtodo)
  }
  return (
    <div className='bg-zinc-700 h-screen w-full items-cente pt-10'>
      <h1 className='text-5xl ml-60 '>Todo-List</h1>
      <input type="text"
      value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)} 
      placeholder='enter new todo'
      className='h-10 w-1/2 ml-36 rounded-md pl-5 pb-1 text-black mt-10' />
      <button className='h-10 ml-5 w-24 rounded-md bg-white' onClick={addtodo}>Add</button>
      <ul>
        {todo.map((todo,index)=>(
          <li  className='h-10 w-1/2 ml-36 rounded-md  pl-5 pt-2 text-black mt-10 bg-white'  key={index}>{todo}
          <button className='bg-white ml-80 h-10 w-24 rounded-md relative bottom-8 left-4'  onClick={()=>deleteTodo(index)} >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
