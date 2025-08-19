import db from "../db/db.json"
export default function DayList() {
    return(
        <>
            <ul>
                {db.days.map(data => (<li>day{data.day}</li>))}
            </ul>
        </>
    );
}