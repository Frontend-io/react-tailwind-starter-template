import * as React from 'react';

const BrokerContainer = React.forwardRef((props, ref)=>{

    return(
        <div ref={ref} class={`max-w-6xl mx-auto px-2 sm:px-2 ${props.box}`}>
            {props.children}
        </div>
    )
})

export default BrokerContainer