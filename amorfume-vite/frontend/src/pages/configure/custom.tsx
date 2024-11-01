"use client"

import { useState } from "react"
import { cn } from "../../@/lib/utils"
// import Dropzone, {FileRejection} from "react-dropzone"


const Custom = () => {

    // const [isDragOver, setIsDragOver] = useState<boolean>(false)
    const [isDragOver] = useState<boolean>(false)


    // const onDropRejected = () => {}
    // const onDropAccepted = () => {}


    return (

        <div className={cn("relative h-full flex-1 my-16 w-full rounder-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center", {
            "ring-blue-900/25 bg-blue-900/10": isDragOver
        })}>
        <div className="relative flex flex-1 flex-col items-center justify-center w-full">
            {/* <Dropzone onDropRejected={}></Dropzone> */}
        </div>
        </div>
    )
}

export default Custom