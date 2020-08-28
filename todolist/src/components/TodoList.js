import React, {useContext} from 'react'
import {TodoListContext} from '../context/TodoListContext'

const TodoList = () => {
    const {tasks} = useContext(TodoListContext)
    return (
        <div>
            <ul className="list">
                {tasks.map((task) => {
                     
                })}
            </ul>
        </div>
    )
}

export default TodoList
