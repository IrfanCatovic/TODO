import { createContext, useReducer } from "react";


const tdcontext = createContext();

const initialState ={
    todos: [
    {id:1, title:"Learn React", completed: false, 
    },
    {id:2, title:"Build a Todo App", completed: false},
    {id:3, title:"Master JavaScript", completed: true}],
     currentTask: {},
     error:""
}

    function reducer(state, action){
        switch(action.type){

            case "ADD_TODO": 
            return { ...state, todos: [...state.todos, action.payload] };


            case "Get_TODO":
                return { ...state, currentTask: action.payload };

                

            case "Delete_TODO":
                return {
                    ...state,
                    todos: state.todos.filter(todo => todo.id !== action.payload),
                    currentTask: {}
                };  


                    default:
                        throw new Error("Unknown action type");
                    
        } 
    }
        


    function TdProvider({ children}) {
    const [{ todos, currentTask, error}, dispatch] = useReducer(reducer, initialState)
  }

  