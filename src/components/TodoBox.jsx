import { useContext, useState } from "react";
import Button from "./Button";
import InputBox from "./InputBox";


const TodoBox=()=>{ 
    const [inputValue,setInputValue]= useState("");

const handleInput=(e)=>{
    setInputValue(e.target.value);
    console.log(inputValue)
}

    return(
        <div className="min-h-[100px] w-[350px] bg-yellow-200 p-5">
            <h1 className="text-center bg-blue-400 mb-4">To-do-list</h1>
            <div className="flex justify-between">
            <InputBox onChange={handleInput} />
            <Button text="Save" className="bg-blue-500" />
        </div>

        </div>
    )
}
export default TodoBox;