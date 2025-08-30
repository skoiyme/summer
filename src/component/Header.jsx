import { Link } from "react-router-dom";



export default function Header() {
    return (
        <>
            <Link to={"/"}><h3>토익 영단어(고급)</h3></Link>
            <Link to={"/create_word"} className="link">단어 추가</Link>
            <Link to={"/create_day"} className="link">Day 추가</Link>
        </>
    );
        
    
}