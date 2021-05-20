import {forwardRef} from 'react';
import { useToggle } from '../hooks';
import {BsEye, BsEyeSlash} from 'react-icons/bs'

const BrokerInput = forwardRef(({label,noLabel, asSelect, box, ...rest}, ref)=>{
    const {toggle, setToggle} = useToggle()

    return(
        <div className={box}>
            {!noLabel && <label htmlFor={rest.name} className="block text-sm font-medium text-gray-700">{label}</label>}
            <div className="mt-1 relative">
                {
                    asSelect ? 
                    <select 
                        ref={ref}
                        className=" block w-full px-4 py-3 sm:py-2 border border-gray-300 rounded-md shadow-sm bg-white placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm"
                        id={rest.name}
                        {...rest}>
                        {
                            asSelect.map((s,k)=>(
                                <option value={s} key={k}>{s}</option>
                            ))
                        }
                    </select>
                    :
                    <div>
                        <input 
                            ref={ref}
                            autocomplete="current-password" 
                            className="appearance-none block w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm"
                            id={rest.name} 
                            {...rest}
                            type={toggle ? "text" : rest.type} />
                            {
                                rest.type === "password" ?
                                <span onClick={setToggle} className=" cursor-pointer text-gray-400 block absolute top-1 top-3 right-3">
                                    { toggle ? <BsEyeSlash /> : <BsEye /> }
                                </span>
                                : null
                            }
                    </div>
                }
                </div>
        </div>
    )
})

export default BrokerInput