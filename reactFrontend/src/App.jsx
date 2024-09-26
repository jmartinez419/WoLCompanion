import react, {useState} from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Homepage, Items, Login, News, Profile, SignUp, Support} from "./components"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes />
    </>
  )
}

export default App
