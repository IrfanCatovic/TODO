import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";


export default function App(){
    return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Homepage />} />


            <Route path="todo" element={}>
                <Route />
            </Route>
            
        </Routes>
    </BrowserRouter>)
}