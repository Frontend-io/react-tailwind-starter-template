import  {Fragment} from 'react';
import { BrokerLink } from "..";
import { useToggle, useCloseContext } from "../../hooks";
import { FaTimes } from "react-icons/fa";
import { clearCookieIfExists } from "../../utils/cookie";
import useRedirect from "../../utils/redirect";
import BrokerButton from "../button";
import { BsChevronExpand } from 'react-icons/bs';


const Header = (props)=>{
    const {redirect} = useRedirect()
    const {toggle, setToggle} = useToggle()
    const {visible, setVisible, ref} = useCloseContext(false)
    const {toggle:toggle2, setToggle:setToggle2} = useToggle()

    const routes = {
        main: [
            {title:"Dashboard", route: "/dashboard"},
            {title:"Contacts", route: "/contacts"},
            {title:"Deals", route: "/deal"},
            {title:"Templates", route: "/templates"},
        ],
        user:[
            {title:"Your Profile", route: "profile"},
            {title:"Settings", route: "settings"},
            {
                title:"Sign out", 
                route: "#", 
                onClick: ()=> {
                    clearCookieIfExists("broker_token");
                    redirect("login");
                    setVisible();
                }
            },
        ]
    }

    return (
        <nav className="sticky bg-white z-40 top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                            <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                {
                                    routes.main.map((r,i)=>(
                                        <BrokerLink
                                            key={i} 
                                            to={r.route} 
                                            className="text-gray-400 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                            activeClassName="bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium text-white"
                                            activeStyle={{color: "#FFF"}}>{r.title}</BrokerLink>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex items-center">
                            <button className="bg-gray-50 p-1 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" x-description="Heroicon name: bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                                </svg>
                            </button>
                            <div ref={ref} className="ml-3 relative">
                                <div>
                                    <button onClick={setVisible} className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                    </button>
                                </div>
                                {
                                    visible ?
                                    <transition enter-active-className="transition ease-out duration-100" enter-className="transform opacity-0 scale-95" enter-to-className="transform opacity-100 scale-100" leave-active-className="transition ease-in duration-75" leave-className="transform opacity-100 scale-100" leave-to-className="transform opacity-0 scale-95">
                                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                            {
                                                routes.user.map((r,i)=>(
                                                    <Fragment key={i}>
                                                        {
                                                            r.onClick ? 
                                                            <div  className="my-2 mx-auto shadow-sm px-4" >
                                                                <BrokerButton box="w-full" onClick={r.onClick}>{r.title}</BrokerButton>
                                                            </div>
                                                            :
                                                            <BrokerLink 
                                                            key={i}
                                                            to={r.route} 
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
                                                            role="menuitem">{r.title}</BrokerLink>
                                                        }
                                                    </Fragment> 
                                                ))
                                            }
                                        </div>
                                    </transition>
                                    : null
                                }
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex sm:hidden">
                        <button onClick={setToggle} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <span className="text-2xl">
                                { 
                                    !toggle ? 
                                    <svg className="block h-6 w-6" x-description="Heroicon name: menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                    : 
                                    <FaTimes /> 
                                }
                            </span>
                        </button>
                    </div>
                </div>
                </div>
                <div className={`${toggle ? "" : "hidden"} bg-blue-700 sm:hidden`}>
                    <div className="px-4 pt-4 pb-3 space-y-1">
                        {
                            routes.main.map((r,i)=>(
                                <BrokerLink
                                    key={i} 
                                    to={r.route} 
                                    className="text-gray-300 hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    activeClassName="bg-blue-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                                    activeStyle={{color: "#FFF"}}>{r.title}</BrokerLink>
                            ))
                        }
                    </div>
                <div className="pt-4 border-t border-gray-900 bg-blue-700">
                    <div onClick={setToggle2} className="flex pb-4 items-center px-5">
                        <div className="flex-shrink-0 border border-white rounded-full p-1">
                            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium text-white">Tom Cook</div>
                            <div className="text-xs  text-gray-300">tom@example.com</div>
                        </div>
                        <span className="text-md ml-2 text-white">
                            <BsChevronExpand />
                        </span>
                        <BrokerButton className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-700 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">View notifications</span>
                            <svg className="h-6 w-6" x-description="Heroicon name: bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                            </svg>
                        </BrokerButton>
                    </div>
                    {
                        toggle2 ? 
                        <div className="mt-3 bg-blue-800 px-2 pb-8 border-t border-gray-800 pt-2 space-y-1">
                            {
                                routes.user.map((r,i)=>(
                                    <Fragment key={i}>
                                        {
                                            r.onClick ? 
                                            <div  className="my-3 mx-auto shadow-sm px-3" >
                                                <BrokerButton box="w-full" style={{background: "white", color: "black"}} onClick={r.onClick}>{r.title}</BrokerButton>
                                            </div>
                                            :
                                            <BrokerLink 
                                            to={r.route} 
                                            activeClassName="bg-gray-900 px-3 py-2 rounded-md text-sm font-medium text-white" 
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 text-white hover:text-white hover:bg-blue-900"
                                            role="menuitem">{r.title}</BrokerLink>
                                        }
                                    </Fragment>
                                ))
                            }
                        </div>
                        : null
                    }
                </div>
            </div>
        </nav>
    )
}

export default Header