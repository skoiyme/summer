import { useState } from "react"

export default function Word({word}) {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
    console.log(isDone+"222");

    return (
        <>
            <tr className={isDone ? 'off': ''}>
                <td>
                    <input type='checkbox' checked={isDone} onChange={
                        () => {
                            setIsDone(!isDone);
                        }
                    }></input>
                </td>
                <td>{word.eng}</td>
                <td>{isShow && word.kor}</td>
                <td>
                    <button onClick={
                        () => {
                            setIsShow(!isShow);
                        }
                    }>뜻 {isShow ? '숨기기':'봐봐'}</button>
                    <button className='btn_del'>삭제</button>
                </td>
             </tr>
        </>
    )
        
}