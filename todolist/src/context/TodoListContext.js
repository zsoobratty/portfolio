import React, {createContext, useState} from 'react'


export const TodoListContext = createContext();

const TodoListContextProvider = () => {
    const [tasks, setTasks] = useState([
        {task: 'Read a book', id: 1},
        {task: 'Wash the car', id: 2},
        {task: 'Write some code', id: 3}
    ]);

    return(
        <div>Todo List Context</div>
    )
}

export default TodoListContextProvider