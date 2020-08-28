import React from 'react'

const TodoForm = () => {
    return (
        <div>
            <form className="form">
                <input 
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
