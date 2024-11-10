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
    
    <div className='bg-zinc-700 min-h-screen w-full flex flex-col items-center pt-10 px-4 md:px-10'>
    <h1 className='text-3xl md:text-5xl text-white font-semibold'>Todo-List</h1>
    <div className='flex items-center w-full md:w-1/2 lg:w-1/3 mt-5 md:mt-10'>
        <input 
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} 
            placeholder='Enter new todo'
            className='h-10 w-full rounded-md pl-5 pb-1 text-black'
        />
        <button 
            className='h-10 w-24 rounded-md bg-white ml-3'
            onClick={addtodo}
        >
            Add
        </button>
    </div>
    <ul className='w-full md:w-1/2 lg:w-1/3 mt-5'>
        {todo.map((todoItem, index) => (
            <li key={index} className='flex items-center mt-5'>
                <div className='w-full break-words overflow-hidden rounded-md text-black bg-white pl-3 py-2'>
                    {todoItem}
                </div>
                <button 
                    className='bg-red-500 text-white h-10 w-24 rounded-md ml-3'
                    onClick={() => deleteTodo(index)}
                >
                    Delete
                </button>
            </li>
        ))}
    </ul>
</div>
    )
}
