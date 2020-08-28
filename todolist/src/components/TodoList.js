import React, {useContext} from 'react'
import {TodoListContext} from '../context/TodoListContext'
import Todo from './Todo'

const TodoList = () => {
    const { todos } = useContext(TodoListContext)
    return (
        <div>
            {todos.length ? (
                <ul className="list">
                    {todos.map(todo => {
                        return <Todo key={todo.id} todo={todo}/>
                    })}
                </ul>
            ) : (
                <div className="no-tasks">
                    No todos
                </div>
            )
            }

        </div>
    )
}

export default TodoList
