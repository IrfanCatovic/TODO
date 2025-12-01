import { useParams } from "react-router-dom"
import { useTd } from "../context/tdcontext";
import { useEffect } from "react";

export default function ToDoItem() {
    const {id} = useParams();

    const { currentTask, getTask } = useTd()

    useEffect(function(){
            getTask(id)
        },[id, getTask]
    )

    console.log(currentTask)
    return <h1>TODO ITEM</h1>
}