import { Typography } from "./Typography"

export const TextInput = ({title = "-", color = "black", className = "", pack = {variable: "", function: ()=>{console.log("action in TextInput")}}}) =>{

    

    return <div className={`${className} flex px-2 py-1 flex-row w-[360px] border-b-[1px]  ${color == "black"?" text-black  border-black": color == "red" ? "text-[#FE0505] border-[#FE0505]":"text-white  border-white"}`}>


        <input placeholder={title} type="text" value={pack.variable} onChange={(e)=>{
            console.log("did something")
            pack.function(e.target.value)
            }}  className=" bg-transparent outline-none placeholder-black " />

    </div>
}