
const Button=({text,className,onClick})=>{
    return(
        <button onClick={onClick} className={`border h-[25px] text-sm w-[40px] cursor-pointer ${className}`}>
{text}
        </button>
    )
}
export default Button;