import { useNavigate } from "react-router-dom";

export default function Hero(){
      const navigate = useNavigate();

    return (
    <>
        <h1>Track your daily tasks</h1>
        <button onClick={() => navigate("/todo")}>Get started</button>
    </>
    )
}