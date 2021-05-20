import * as React from 'react';
import PropTypes from 'prop-types';
import userdata from '../../mock-data';


const DashHeader = React.forwardRef((props,ref)=>{
    const {user} = userdata
    const {first_name, last_name} = user
    
    return(
        <div ref={ref} class="bg-white shadow mb-8">
            <div class="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                <div class="py-6 pt-4 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center">
                            <img class="hidden h-16 w-16 rounded-full sm:block" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.6&amp;w=256&amp;h=256&amp;q=80" alt="" />
                            <div>
                                <div class="flex items-center">
                                <img class="h-16 w-16 rounded-full sm:hidden" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.6&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                {
                                    props.title ?
                                        <h1 class="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                                            {props.title}
                                        </h1> 
                                    : 
                                        <h1 class="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                                            Hello, {first_name} {last_name}
                                        </h1>
                                }
                                </div>
                                <dl class="mt-4 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                                    <dt class="sr-only">Company</dt>
                                    {
                                        props.description ? 
                                         <dt class="flex items-center text-sm text-gray-500 font-medium">{props.description}</dt>
                                        :
                                        <>
                                            <dd class="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6">
                                                <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" x-description="Heroicon name: office-building" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"></path>
                                            </svg>
                                                Duke street studio
                                            </dd>
                                            <dt class="sr-only">Account status</dt>
                                            <dd class="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                                                <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" x-description="Heroicon name: check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                </svg>
                                                Verified account
                                            </dd>
                                        </>
                                    }
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
})

DashHeader.propTypes={
    title: PropTypes.string,
    description: PropTypes.any,
}


export default DashHeader