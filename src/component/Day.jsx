import {Navigate, useParams} from "react-router-dom";
import Word from './Word';

import uesFetch from "../hooks/uesFetch";
export default function Day() {

    const day = Number(useParams().day);

    
    //     useEffect(()=>{
    //         fetch('http://localhost:7777/words')
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             setDb(data);
                
    //         })
    //     },[]);
    //     console.log(db+"3333");
    let db = uesFetch("http://localhost:7777/words");
    let list = db.filter(data => (data.day === day));
    let hasNumber = db.some(data => (data.day === day));

    // console.log(hasNumber+"2222");
    // console.log(day+"4444");

    // if(!hasNumber){
    //     return (
    //         <Navigate to={"/emptyPage"}></Navigate>
    //        // <></>
    //     );
    // }


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