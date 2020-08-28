import React from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Header from './components/Header'
import TodoListContextProvider from './context/TodoListContext'

const App = () => {
    return (
        <TodoListContextProvider>
            <div className='container'>
                <div className="app-wrapper">
                    <div className="main">
                        <Header />
                        <TodoForm />
                        <TodoList />
                    </div>
                </div>
            </div>
        </TodoListContextProvider>
    )
}

export default App