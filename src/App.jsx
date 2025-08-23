import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import DayList from './component/DayList'
import Day from './component/Day'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from './component/EmptyPage'


function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
    <div className='App'> 
      <Header/>
      <Routes>
        <Route path="/" element={<DayList/>}></Route>
        <Route path="/day/:day" element={<Day/>}></Route>
        <Route path='*' element={<EmptyPage/>}></Route>
      </Routes>
      

    </div>
   </BrowserRouter>
  )
}

export default App
