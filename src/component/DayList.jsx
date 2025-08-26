import { Link } from "react-router-dom";
import useFetch from "../hooks/uesFetch";
export default function DayList() {
    let db = useFetch('http://localhost:7777/days');


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