import { forwardRef } from "react";
import Loading from "./loading";


const BrokerButton = forwardRef(({children, isLoading, box, bg, hoverBg, ...props},ref)=>{
    const style = {
        className: props.outlined ?
        `block  disabled:opacity-50 text-center  px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 ${bg || "bg-white"} hover:${hoverBg || "bg-gray-50"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 ${box}`
        :
        `block disabled:opacity-50 justify-center transition duration-100 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${bg || "bg-blue-600"} hover:${hoverBg || "bg-blue-700"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:${hoverBg || "ring-blue-500"} ${box}`
    }
    

    return(
        <button 
            ref={ref}
            className={style.className}
            {...props}>
            { 
                isLoading ? 
                    <Loading text={props.loadingText} /> 
                : 
                children
            }
        </button>
    )
})

export default BrokerButton