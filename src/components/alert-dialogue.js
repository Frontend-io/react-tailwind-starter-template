import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FiInfo } from "react-icons/fi";


export default function BrokerDialogue({onClose, onContinue, title, description, isOpen}) {
  const cancelButtonRef = useRef()

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-50 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={isOpen}
        onClose={onClose}
    >
        <span className="absolute text-lg text-gray-300 hover:text-gray-600 right-10 top-10"></span>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" />
          </Transition.Child>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block relative align-bottom bg-white w-full rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white pt-4 sm:pt-4">
                <div className="flex flex-row items-center px-4 sm:px-8">
                  <span onClick={onClose} className="text-3xl animate-ping text-red-600 block mr-3 ml-2 ml-0 sm:mr-4 text-gray-300 cursor-pointer z-10 top-1">
                    <FiInfo />
                  </span>
                  <div className="relative py-2 text-left px-4 w-full">
                    <Dialog.Title as="h3" className="pb-2 leading-6 text-md sm:text-lg font-medium text-gray-900">
                      {title || "Are you sure?"}
                    </Dialog.Title>
                    <div className="text-sm text-gray-600">
                        {description}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 border-t mt-4 px-4 py-3 sm:px-6 flex sm:flex-row justify-end">
                    <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={onClose}
                        ref={cancelButtonRef}>
                        No
                    </button>
                    <button
                        type="button"
                        className="ml-2 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => {
                            onContinue && onContinue();
                            onClose()
                        }}>
                        Yes
                    </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
