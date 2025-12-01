import { Link, NavLink } from "react-router-dom"
import { useTd } from "../context/tdcontext"
import AddTask from "./AddTask"

export default function Main(){
    const {todos, deleteTodo} = useTd()



    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        
                        <Link to ={`/todo/${todo.id}`}> 
                        {todo.title} {todo.completed ? "(Completed)" : "(Pending)"}
                        
                        </Link>
                        <button onClick={()=> deleteTodo(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
            <AddTask />
        </div>
    )
}