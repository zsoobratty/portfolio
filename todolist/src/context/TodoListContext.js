import React, {createContext, useState} from 'react'


export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
    const [todos, setTodos] = useState([
        {title: 'Read a book', id: 1},
        {title: 'Wash the car', id: 2},
        {title: 'Write some code', id: 3}
    ]);

    return(
        <TodoListContext.Provider value={{todos}}>
            {props.children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider