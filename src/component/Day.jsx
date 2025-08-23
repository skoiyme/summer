import db from '../db/db.json'
import {useParams} from "react-router-dom";
export default function Day() {

    const day = useParams().day;
    
    let list = db.words.filter(data => (data.day === Number(day)));
    

    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <thead>
                    <tr>
                        <td>
                            영어
                        </td>
                        <td>
                            뜻
                        </td>
                    </tr>
                </thead>
                <tbody>


                    {list.map(
                            data => (
                                <tr key={data.id}>
                                    <td>{data.eng}</td>
                                    <td>{data.kor}</td>
                                </tr>
                            )
                        )}
                </tbody>



            </table>
        </>
    );
}