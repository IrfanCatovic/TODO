import { useState } from "react";
import { useTd } from "../context/tdcontext"

export default function AddTask(){

    const { addTodo } = useTd()

    const [title, setTitle] = useState("")
    const [completed, setCompleted] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        if(!title) return
        const newTask ={
            id: Date.now(),
            title,
            completed: false,
        }

        addTodo(newTask)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={e=> setTitle(e.target.value)} placeholder="Task name" />
            <button type="submit">Add Task</button>
        </form>
    )
}