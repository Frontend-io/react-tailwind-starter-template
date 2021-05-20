import * as React from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { useCloseContext } from '../hooks';
import PropTypes from 'prop-types'

const BrokerContextMenu = React.forwardRef((props, ref)=>{
    const {visible, setVisible, ref:ref2} = useCloseContext()

        return(
            <div ref={ref || ref2} className="relative">
                <span onClick={setVisible} className="h-9 w-9 block pl-2 pt-2 text-lg rounded-full sm:cursor-pointer hover:bg-gray-100">
                    <FiMoreVertical />
                </span>
                {
                    visible ? 
                    <div className="origin-top-right text-left py-4 z-20 absolute flex flex-col right-0 mt-2 w-48 rounded-md shadow-lg bg-white" 
                        role="menu" 
                        aria-orientation="vertical" 
                        aria-labelledby="context menu">
                           {
                               Object.values(props.data).map((o,m)=> <span className="p-4 py-1 text-xs text-black sm:text-sm hover:bg-gray-50" key={m}>{o}</span>)
                           }
                    </div>
                    : null
                }
            </div>
        )
})

BrokerContextMenu.propTypes = {
    data: PropTypes.object.required
}

export default BrokerContextMenu