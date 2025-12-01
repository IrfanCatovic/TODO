import { Link } from "react-router-dom";

export default function Header(){
    return (
        <>
        <h1>
            <Link to ="/todo">
                Header
            </Link>
        </h1>

        </>
        )
}