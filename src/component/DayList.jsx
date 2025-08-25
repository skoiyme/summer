import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function DayList() {
    const [db, setDb] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:7777/days')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setDb(data);
        })
    },[]);
    return (
        <>
            <ul>
                {db.map(data => (
                    <li key={data.id}>
                        <Link to={`/day/${data.day}`}>Day {data.day}</Link>
                    </li>

                ))}
            </ul>
        </>
    );
}