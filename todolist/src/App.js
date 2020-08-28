import React from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import TodoListContextProvider from './context/TodoListContext'

const App = () => {
    return (
        <TodoListContextProvider>
            <div className='container'>
                <div className="app-wrapper">
                    <div className="main">
                        <TodoForm />
                        <TodoList />
                    </div>
                </div>
            </div>
        </TodoListContextProvider>
    )
}

export default App