import React from 'react'

const Todo = ({ todo }) => {
    return (
        <div>
            <li className="list-item">
                <span>
                    {todo.title}
                </span>
                <div>
                    <button className="btn-delete task-btn">
                       <i className="fas fa-trash-alt"></i>
                    </button>
                    <button className="btn-edit task-btn">
                       <i className="fas fa-pen"></i>
                    </button>
                </div>
            </li>
        </div>
    )
}

export default Todo
