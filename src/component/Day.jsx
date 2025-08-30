import {Navigate, useNavigate, useParams} from "react-router-dom";
import Word from './Word';

import uesFetch from "../hooks/uesFetch";
export default function Day() {

    const day = Number(useParams().day);
    const nav = useNavigate();

    
    let db = uesFetch("http://localhost:7777/words");
    let days = uesFetch("http://localhost:7777/days");
    let list = db.filter(data => Number(data.day) === Number(day));
  
    let hasNumber = days.some(data => Number(data.day) === Number(day));
    console.log(days.length+"!@!#!#@@!");
    console.log(days+"rr");
    console.log(hasNumber+"ss");

    // if(db.length === 0){
    //     return <div><span>Loding...</span></div>
    // }

    if(days.length > 0 && !hasNumber){
        nav(`/emptyPage`);
    }


    return (
        <>
            <h2>Day {day}</h2>
            {db.length === 0 && <div><span>Loding...</span></div>}
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