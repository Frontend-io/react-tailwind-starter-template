import * as React from 'react';

const BrokerBadge = React.forwardRef(({status, ...props},ref)=>{
    const statusColor = {
        ACTIVE:'green' ,
        SUCCESS:'green',
        PENDING:'yellow',
        DISABLED:'gray',
        INACTIVE:'gray',
        ERROR:'red',
        FAIL:'red',
        BLOCKED:'red',
    }

    return(
        <span ref={ref} {...props}>
            <span class={`block w-15 text-center px-2.5 py-1 rounded-full text-xs font-medium capitalize text-${statusColor[status]}-800 bg-${statusColor[status]}-100`}>
                {status}
            </span>
        </span>
    )
})

export default BrokerBadge 