import { Link, useSearchParams } from "react-router-dom"
import { useTd } from "../context/tdcontext"
import AddTask from "./AddTask"

export default function Main(){
    const {todos, deleteTodo} = useTd()

    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search") || "";

    const handleSearch = (e) => {
        const value = e.target.value;

        if (value === "") setSearchParams({});
            else setSearchParams({ search: value });
    };

        const filtered = todos.filter((todo) =>
        todo.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div>
            <input type="search" placeholder="Search task" value={search} onChange={handleSearch} />
            <ul>
                {filtered.map((todo) => (
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