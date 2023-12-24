import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Members from './Members'
import User from './User'

function App() {

 function handleClick() {
    alert('What happend?');
  }

  return (
    <>
      <h2>React Core Concept 2</h2>

      <Members></Members>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Here</button>
    </>
  )
}

export default App
