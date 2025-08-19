import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import DayList from './component/DayList'
import Day from './component/Day'


function App() {
  const [count, setCount] = useState(0)
  return (
   <div className='App'> 
    <Header/>
    <DayList/>
    <Day/>
   </div>
  )
}

export default App
