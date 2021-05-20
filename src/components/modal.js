import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'


export default function BrokerModal({onClose, title, children, isOpen}) {
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
            <span onClick={onClose} className="text-3xl absolute text-gray-300 hover:text-gray-600 right-5 cursor-pointer z-10 top-1">&times;</span>
              <div className="bg-white pt-4 pb-4 sm:pt-4 sm:pb-6">
                <div className="sm:flex sm:items-start">
                  <div className="relative sm:text-left w-full">
                    <Dialog.Title as="h3" className="border-b px-4 sm:px-8 pb-4 capitalize leading-6 text-md sm:text-lg font-medium text-gray-900">
                      {title}
                    </Dialog.Title>
                    <div className="mt-3 px-4 sm:px-8">
                        {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
