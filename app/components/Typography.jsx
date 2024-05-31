export const Typography = ({children, variant, className = "", onClick}) =>{


    const getStyle = (v) =>{

        switch(v){

            case "title":
                return " uppercase font-black text-[32px]"

            case "h1":
                return " uppercase font-black text-[64px]"

            case "h1.5":
                return " uppercase font-black text-[34px]"
            case "h2":
                return " uppercase font-black text-[24px]"
            
            case "h3":
                return " uppercase font-black text-[18px]"

            case "tiny":
                return "uppercase font-black text-[14px]"
            case "micro":
                return "uppercase font-black text-[8px]"
            case "lightMicro":
                return "font-thin text-[12px]"

            default:
                return "text-[16px]"
        }

    }
    


    return <h1 onClick={onClick} className={` ${className}    ${getStyle(variant)}`}>{children}</h1>
}