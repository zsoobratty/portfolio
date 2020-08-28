import React from 'react'

const Todo = () => {
    return (
        <div>
            <li className="listitem">
                <span>
                    Todo
                </span>
                <div>
                    <button className="delete-btn">
                       <i className="fas fa-trash-alt"></i>
                    </button>
                    <button className="added-btn">
                       <i className="fas fa-pen"></i>
                    </button>
                </div>
            </li>
        </div>
    )
}

export default Todo
