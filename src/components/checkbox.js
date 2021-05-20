import {forwardRef} from 'react';
const BrokerCheckbox = forwardRef((props, ref)=>{

    return(
        <div className="flex items-center">
            <input 
                ref={ref}
                id={props.name}
                type="checkbox" 
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                {...props} />
                {props.label && <label htmlFor={props.name} className="ml-2 block text-sm text-gray-900">{props.label}</label>}
        </div>
    )
})

export default BrokerCheckbox