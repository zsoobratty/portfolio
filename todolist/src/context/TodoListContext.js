import React, {createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';



export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
    const [todos, setTodos] = useState([
        {title: 'Read a book', id: 1},
        {title: 'Wash the car', id: 2},
        {title: 'Write some code', id: 3}
    ]);

    const addTodo = (title) => {
        setTodos([...todos, {title: title, id: uuidv4() }])
    }

    return(
        <TodoListContext.Provider value={{todos, addTodo}}>
            {props.children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider