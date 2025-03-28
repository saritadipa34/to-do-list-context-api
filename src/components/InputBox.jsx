
const InputBox=({onChange,value,onKeyDown})=>{
    return(
        <input onChange={onChange} onKeyDown={onKeyDown} maxLength={25} className="h-[30px] w-3/4 border p-1 mb-4" type="text" 
       value={value} />
    )
}
export default InputBox;