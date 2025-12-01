import { createContext, useCallback, useContext, useReducer } from "react";


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

    //u reduceru definisemo akcije koje cemo koristiti za menjanje state
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

            const getTask = useCallback( 
                async function getTask(id){
                const task = todos.find(todo => todo.id === Number(id));
                if (task) {
                    dispatch({ type: "Get_TODO", payload: task });
                } else {
                    dispatch({ type: "Get_TODO", payload: {} });
                }
            },[currentTask.id])

        //exportujemo tdprovider da bismo mogli da obavijemo app.js
        return <tdcontext.Provider value={{todos, getTask, currentTask, error, dispatch}}>{children}</tdcontext.Provider>


  }

  function useTd(){
    const context = useContext(tdcontext)
    if (context === undefined)
    throw new Error("TD Context was used outside the cities provider");
  return context;
  }

  //umesto useTd moze i ovako:
  // export useContext(tdcontext)
  //ali svaki put kada koristimo moramo importovati useContext i tdcontext, dok ovako samo useTd
  //i kada ga pisemo npr const {todos} = useContext(tdcontext)
  export {TdProvider, useTd}

  