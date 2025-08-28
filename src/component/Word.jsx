import { useState } from "react"

export default function Word({word:w}) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
    console.log(isDone+"222");

    if(word.id === 0){
        return null;
    }

    return (
        <>
            <tr className={isDone ? 'off': ''}>
                <td>
                    <input type='checkbox' checked={isDone} onChange={
                        () => {
                            fetch(`http://localhost:7777/words/${word.id}`, {
                              method: "PUT",
                              headers: {
                                'Content-Type' : 'application/json',
                              },
                              body : JSON.stringify({
                                ...word,
                                isDone : !isDone,
                              }),
                            }).then(res => {
                                if(res.ok) {
                                    setIsDone(!isDone);
                                }
                            }); 
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
                    <button className='btn_del' onClick={() => {
                        if(window.confirm('삭제 하시겠습니까?')){
                            fetch(`http://localhost:7777/words/${word.id}`,{
                                method : 'DELETE',
                            }).then(res => {
                                if(res.ok){
                                    setWord({id:0});
                                }
                            })
                        }
                    }}>삭제</button>
                </td>
             </tr>
        </>
    )
        
}