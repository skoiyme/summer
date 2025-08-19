import db from '../db/db.json'
export default function Day() {
    return (
        <>
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


                    {db.words.filter(
                        data => (
                            data.day == 3
                        )).map(
                            data => (
                                <tr>
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