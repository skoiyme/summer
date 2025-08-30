import { useRef } from "react";
import useFetch from "../hooks/uesFetch";
import { useNavigate } from "react-router-dom";

export default function CreateWord() {
    const days = useFetch("http://localhost:7777/days");
    const nav = useNavigate();

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);


    return(
        <form onSubmit={(e) => {
                e.preventDefault();

                fetch(`http://localhost:7777/words/`, {
                    method: "POST",
                    headers: {
                    'Content-Type' : 'application/json',
                    },
                    body : JSON.stringify({
                    day : dayRef.current.value,
                    eng : engRef.current.value,
                    kor : korRef.current.value,
                    isDone : false,
                    }),
                }).then(res => {
                    if(res.ok) {
                        alert('등록이 완료 되었습니다');
                        nav(`/day/${dayRef.current.value}`)

                    }
                });

            }}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef}></input>
            </div>
             <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}></input>
            </div>
             <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                    <option key={day.id} value={day.day}>{day.day}</option>

                    ))}
                    
                </select>
            </div>
            <button>저장</button>
        </form>
    );
        

}