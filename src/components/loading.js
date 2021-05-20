import * as React from 'react';

const Loading = React.forwardRef((props, ref)=>{
    const size = {
        sm: "h-14 w-14",
        lg: "h-34 w-34",
    }

    return(
        <span className="flex text-center inline-flex items-center" {...props} ref={ref}>
            <svg 
                class={`loader ease-linear rounded-full border-2 border-t-2 border-white h-4 w-4 ${size[props]} `} 
                viewBox="0 0 24 24"></svg>
            {props.text && <span className="text-sm ml-2">{props.text}</span>}
        </span>
    )
})



export default Loading