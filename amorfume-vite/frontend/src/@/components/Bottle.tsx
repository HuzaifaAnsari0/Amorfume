import { HTMLAttributes } from "react"
import { cn } from "../lib/utils"
import Bottle1 from "../../assets/images/bottle2.png"
interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string
    dark?: boolean
}

const Bottle =({ imgSrc , className, dark = false, ...props}: PhoneProps) => {
    return (
        <div 
        className={cn("relative pointer-events-none z-50 overflow-hidden", 
            className)}
            {...props}>
                <img
                 src={Bottle1} 
                 className="pointer-events-none z-50 select-none" 
                 alt="Bottle"
                 />

                 <div className="top-40 absolute z-20 inset-0">
                    <img className='object-cover'
                    src={imgSrc}
                    alt="Overlay Phone"/>
                 </div>
            </div>
    )
}

export default Bottle