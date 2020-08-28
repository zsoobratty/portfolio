import React, {useContext, useState} from 'react'
import {TodoListContext} from '../context/TodoListContext'

const TodoForm = () => {
    const { addTodo } = useContext(TodoListContext)

    const [title, setTitle] = useState('')

    const handleChange = e => {
        setTitle(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        addTodo(title)
    }

    return (
        <div>
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
                    <button type="submit" className="btn add-task-btn">
                        Add
                    </button>
                    <button type="submit" className="btn clear-btn">
                        Clear
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm
