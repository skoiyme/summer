import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => {
                console.log(url+"***");
                return res.json();
            })
            .then(data2 => {
                setData(data2);

            })
    }, [url]);
    return data;

}