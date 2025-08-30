import {Navigate, useParams} from "react-router-dom";
import Word from './Word';

import uesFetch from "../hooks/uesFetch";
export default function Day() {

    const day = Number(useParams().day);

    
    let db = uesFetch("http://localhost:7777/words");
    let list = db.filter(data => Number(data.day) === Number(day));
  
    let hasNumber = db.some(data => (data.day === day));

    // if(db.length === 0){
    //     return <div><span>Loding...</span></div>
    // }

    // if(!hasNumber){
    //     console.log(hasNumber+"2212");
    // }


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