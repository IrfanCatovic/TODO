import Header from "../Components/Header"
import Main from "../Components/Main"

const todoList =[
    {id:1, title:"Learn React", completed: false},
    {id:2, title:"Build a Todo App", completed: false},
    {id:3, title:"Master JavaScript", completed: true},
]

export default function Todo(){
    return (
        <div>
                    <Header/>
                    <Main />
                </div>
    )
}