import React, {useContext} from 'react'
import {TodoListContext} from '../context/TodoListContext'
import Todo from './Todo'

const TodoList = () => {
    const { todos } = useContext(TodoListContext)
    return (
        <div>
            <ul className="list">
                {todos.map(todo => {
                     return <Todo />
                })}
            </ul>
        </div>
    )
}

export default TodoList
