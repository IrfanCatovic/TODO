import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Todo from "./Pages/Todo";


export default function App(){
    return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Homepage />} />


            <Route path="todo" element={<Todo />}>
                <Route />
            </Route>
            
        </Routes>
    </BrowserRouter>)
}