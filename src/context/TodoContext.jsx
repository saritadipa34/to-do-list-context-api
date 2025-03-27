import { createContext, useState } from "react";

export const TodoContext=createContext()

const TodoProvider=({children})=>{
const [tasks,setTasks]=useState([])

    return(
        <TodoContext.Provider value={{tasks,setTasks}}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoProvider;