import { BrowserRouter, Route, Routes } from "react-router-dom";

import { TdProvider }  from "./context/tdcontext";
import Homepage from "./Pages/Homepage";
import Todo from "./Pages/Todo";


export default function App(){
    return (
    <BrowserRouter>
    <TdProvider>

        <Routes>
            <Route index element={<Homepage />} />


            <Route path="todo" element={<Todo />}/>
            <Route path="todo/:id" element={<ToDoItem />}/>
            {/* TODO ITEM JOS NIJE NAPRAVALJEN TREBA KADA KLIKNEMO NA ITEM Iz LISTE DA NAS POVEDE NA TAJ URL I PRIKAZE DETALJE O ITEMU */}
            
            
        </Routes>
    </TdProvider>
    </BrowserRouter>)
}