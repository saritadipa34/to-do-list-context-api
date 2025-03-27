
const InputBox=({onChange,value})=>{
    return(
        <input onChange={onChange} className="h-[30px] w-3/4 border p-1 mb-4" type="text" 
       value={value} />
    )
}
export default InputBox;