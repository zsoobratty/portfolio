import React from 'react'
import TodoList from './components/TodoList'
import TodoListContextProvider from './context/TodoListContext'

const App = () => {
    return (
        <TodoListContextProvider>
            <div>
                <TodoList />
            </div>
        </TodoListContextProvider>
    )
}

export default App