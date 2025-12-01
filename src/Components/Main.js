import { useTd } from "../context/tdcontext"

export default function Main(){
    const {todos} = useTd()
    console.log(todos)
    return <h1>Main comp</h1>
}