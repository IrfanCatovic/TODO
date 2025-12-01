import { useNavigate, useParams } from "react-router-dom"
import { useTd } from "../context/tdcontext";
import { useEffect } from "react";
import Header from "./Header";

export default function ToDoItem() {
    const {id} = useParams();
    //kada kliknemo neki item iz liste treba da dohvatimo id iz url-a
    //i na osnovu tog id-a da dohvatimo detalje o tom itemu iz contexta
    //za to nam treba getTask funkcija iz contexta
    const navigate = useNavigate()
    const { currentTask, getTask } = useTd()

    useEffect(function(){
            getTask(id)
        },[id, getTask]
    )

    return (
        <div>
            <Header />
            <h2>{currentTask.title}</h2><p>Status {currentTask.completed ? "Completed" : "Pending"}</p>
            
            <button onClick={() => navigate(-1)}>Go Back</button>          
        </div>
    )
}