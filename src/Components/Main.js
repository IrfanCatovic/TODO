import { Link, NavLink } from "react-router-dom"
import { useTd } from "../context/tdcontext"

export default function Main(){
    const {todos} = useTd()
    
    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        
                        <Link to ={`/todo/${todo.id}`}> 
                        {todo.title} {todo.completed ? "(Completed" : "(Pendind)"}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}