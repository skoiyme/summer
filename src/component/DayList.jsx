import { Link } from "react-router-dom";
import db from "../db/db.json"
export default function DayList() {
    return(
        <>
            <ul>
                {db.days.map(data => (
                    <li key={data.id}>
                        <Link to={`/day/${data.day}`}>Day {data.day}</Link>
                    </li>
                    
                    ))}
            </ul>
        </>
    );
}