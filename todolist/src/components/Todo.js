import React, {useContext} from 'react'
import {TodoListContext} from '../context/TodoListContext'

const Todo = ({ todo }) => {
    const { removeTodo, findItem } = useContext(TodoListContext)

    return (
        <div>
            <li className="list-item">
                <span>
                    {todo.title}
                </span>
                <div>
                    <button onClick={() => removeTodo(todo.id)} className="btn-delete task-btn">
                       <i className="fas fa-trash-alt"></i>
                    </button>
                    <button onClick={() => findItem(todo.id)} className="btn-edit task-btn">
                       <i className="fas fa-pen"></i>
                    </button>
                </div>
            </li>
        </div>
    )
}

export default Todo
