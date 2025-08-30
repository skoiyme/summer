import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/uesFetch";
import { useState } from "react";

export default function CreateDay() {
    const days = useFetch('http://localhost:7777/days');
    const nav = useNavigate();
    return(
        <>
            <h3>현재일수 : {days.length}</h3>
            <button onClick={() => {
                fetch(`http://localhost:7777/days`, {
                    method: "POST",
                    headers: {
                    'Content-Type' : 'application/json',
                    },
                    body : JSON.stringify({
                    day : days.length + 1,
                    }),
                }).then(res => {
                    if(res.ok) {
                        alert('등록이 완료 되었습니다');
                        nav(`/`);

                    }
                });
            }}>day추가</button>
        </>
    )
}