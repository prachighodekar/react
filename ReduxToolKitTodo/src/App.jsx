import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodos from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
        <AddTodos />
        <Todos />
    </>
  )
}

export default App
