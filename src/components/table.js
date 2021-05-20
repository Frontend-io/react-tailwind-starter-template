import { forwardRef } from "react";
import PropTypes from 'prop-types';
import Loading from "./loading";
import BrokerContainer from "./container";
import BrokerInput from "./input";


const BrokerTable = forwardRef(({children, title, noHeader, isLoading, data, ...rest},ref)=>{

    return(
        <BrokerContainer>
            <div ref={ref} {...rest}>
                {
                    !noHeader ? 
                        <div className="flex min-w-full flex-col sm:flex-row sm:items-center justify-between">
                            {title && <h2 class="text-lg flex-1 leading-6 font-medium text-gray-900">{title}</h2>}
                            <div className="sm:w-80">
                                <BrokerInput placeholder="Enter Name, Email to Search" />
                            </div>
                        </div>
                    : null
                }
                <div class="mt-4 overflow-x-auto sm:overflow-visible sm:block">
                    <div class="flex flex-col">
                        <div class="align-middle min-w-full shadow sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        {
                                            data.head.map((h,i)=>(
                                                <th 
                                                    key={i} class="px-6 py-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracing-wider whitespace-pre">
                                                    {h}
                                                </th>
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-gray-200">
                                    {children}
                                </tbody>
                            </table>
                            <nav class="bg-white block w-full px-4 py-4 flex items-center bg-gray-50 justify-between sm:px-6" aria-label="Pagination">
                                <div class="sm:block">
                                    <p class="text-sm text-gray-700">
                                        Showing
                                        <span class="font-medium mx-2">1</span>
                                        to
                                        <span class="font-medium mx-2">10</span>
                                        of
                                        <span class="font-medium mx-2">20</span>
                                        results
                                    </p>
                                </div>
                                <div class=" flex justify-between sm:justify-end">
                                    <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                        Previous
                                    </a>
                                    <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                        Next
                                    </a>
                                </div>
                            </nav>
                            <div>
                                { isLoading && <Loading /> }
                                {
                                    !isLoading && !data.body.length && <p className="font-normal text-sm text-gray-700 text-center">Nothing to show</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BrokerContainer>
    )
})

BrokerTable.propTypes = {
    children: PropTypes.object,
    isLoading: PropTypes.bool,
    data: PropTypes.object,
    title: PropTypes.string,
    noHeader: PropTypes.bool,
}

export default BrokerTable