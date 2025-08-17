import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let [제목1,수정될제목1] = useState(['봄','가을','겨울']);
  let [날짜,수정될날짜] = useState('8월17일');
  let [숫자,수정될숫자] = useState(0);


  
  return (
   <div>
    <div className='topBar'>
      <h4>상단바에욘</h4>
    </div>
    <div className='list'>
      <h4>{제목1[0]} <span onClick={() => {수정될숫자(숫자+1)}}>♥</span>{숫자}</h4>
      <p>{날짜}</p>
      <span onClick={ () => {
        let copy = [...제목1];
        copy[0] = '여름조아';
        수정될제목1(copy);
      }}>★</span>
    </div>
    <div className='list'>
      <h4>{제목1[1]}</h4>
      <p>{날짜}</p>
    </div>
    <div className='list'>
      <h4>{제목1[2]}</h4>
      <p>{날짜}</p>
    </div>
    <button onClick={() => {
      let copy = [...제목1];
      수정될제목1(copy.sort());
    }}>가나다순정렬</button>
   </div>
  )
}

export default App
