import db from '../db/db.json'
import {Navigate, useParams} from "react-router-dom";
import Word from './Word';
export default function Day() {

    const day = Number(useParams().day);
    
    let list = db.words.filter(data => (data.day === day));
    let hasNumber = db.days.some(data => (data.day === day));

    if(!hasNumber){
        return (
            <Navigate to={"/emptyPage"}></Navigate>
        );
    }
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
                                <Word word={data} key={data.id} />
                            )
                        )}
                </tbody>



            </table>
        </>
    );
}