import React from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoListContextProvider from './context/TodoListContext'

const App = () => {
    return (
        <TodoListContextProvider>
            <div className='container'>
                <div className="app-wrapper">
                    <div className="main">
                        <TodoList />
                    </div>
                </div>
            </div>
        </TodoListContextProvider>
    )
}

export default App