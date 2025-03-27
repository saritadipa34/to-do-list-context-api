import { useContext, useState } from "react";
import Button from "./Button";
import InputBox from "./InputBox";
import { TodoContext } from "../context/TodoContext";
import Task from "./Task";


const TodoBox=()=>{ 
    const{tasks,setTasks}=useContext(TodoContext);
    const [inputValue,setInputValue]= useState("");


const handleDelete=(index)=>{
const deleted=tasks.filter((task,i)=>{
    i !== index;
})
setTasks(deleted);
    console.log(tasks[index])
    console.log("delete")
}


const handleEdit=(index)=>{
    const editTask = tasks[index]
    console.log(editTask,index)
    const newTask= prompt("edit todo",editTask)
    if(newTask.trim() === "" || newTask === null){
        alert("Invalid input")
         return;
    } 
    const updated=[...tasks];
    updated[index]=newTask;
    setTasks(updated)
    console.log(editTask,updated,"edit")
}


const handleAdd=()=>{
    if(inputValue.trim() === ""){
        alert("Add a Task")
        return;
    }
    setTasks((prev)=>[...prev,inputValue]);
    setInputValue("");
    console.log("add")
}

const handleInput=(e)=>{
    setInputValue(e.target.value);
    console.log(inputValue )
}

    return(
            <div className="min-h-[100px] w-[350px] bg-yellow-200 p-5">
            <h1 className="text-center bg-blue-400 h-[30px] mb-4">To-do-list</h1>
            <div className="flex justify-between">
            <InputBox onChange={handleInput} value={inputValue}/>
            <Button text="Save" onClick={handleAdd} className="bg-blue-500" />
            </div>
            <div className="flex flex-col gap-4">
            {
               tasks.map((task,index)=>{
                return <Task  key={index} task={task} handleEdit={()=>handleEdit(index)} handleDelete={()=>handleDelete(index)}/>
               }) 
            }
            </div>
            
        </div>

    
    )
}
export default TodoBox;