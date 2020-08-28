import React, {createContext, useState} from 'react'


export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
    const [todos, setTodos] = useState([
        {todo: 'Read a book', id: 1},
        {todo: 'Wash the car', id: 2},
        {todo: 'Write some code', id: 3}
    ]);

    return(
        <TodoListContext.Provider value={{todos}}>
            {props.children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider