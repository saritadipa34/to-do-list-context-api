import Button from "./Button"

const Task=({task,handleEdit,handleDelete})=>{
    return(
            <div className="bg-amber-500 border flex justify-between w-full h-[30px] pl-1">
            <p>{task}</p>
            <div>
            <Button text="edit" onClick={handleEdit} className="bg-blue-500"/>
            <Button text="Delete" onClick={handleDelete} className="bg-red-500"/>
            </div>
            </div>
    )
}
export default Task;