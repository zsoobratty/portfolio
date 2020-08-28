import React, {useContext, useState} from 'react'
import {TodoListContext} from '../context/TodoListContext'

const TodoForm = () => {
    const { addTodo, clearTodos } = useContext(TodoListContext)

    const [title, setTitle] = useState('')

    const handleChange = e => {
        setTitle(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()   
        addTodo(title)
        setTitle('')
    }

    return (
            <form onSubmit={handleSubmit} className="form">
                <input
                    onChange={handleChange}
                    value={title}
                    type="text" 
                    className="task-input"
                    placeholder='What to do...'
                    required
                />
                <div className="buttons">
                    <button 
                        type="submit" 
                        className="btn add-task-btn"                        
                    >
                        Add
                    </button>
                    <button type='button' onClick={() => clearTodos()} className="btn clear-btn">
                        Clear
                    </button>
                </div>
            </form>
    )
}

export default TodoForm
