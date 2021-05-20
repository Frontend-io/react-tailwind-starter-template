import {forwardRef} from 'react';
import {NavLink} from 'react-router-dom'

const BrokerLink = forwardRef(({mirror,children, to="#", ...rest}, ref)=>{
    
    return(
        !mirror ?
            <NavLink 
                ref={ref}
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
                to={to}
                {...rest}>{children}</NavLink>
        :
            <a 
            ref={ref}
            href={to} 
            target="_blank"
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
            {...rest}>{children}</a>
        
    )
})

export default BrokerLink