
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useContextualRouting } from 'next-use-contextual-routing';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { XIcon } from '@heroicons/react/outline'
import { LinkIcon, PlusIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid'

export default function TopSideBar(props) {
    const { open = false, children, width = 'max-full', title } = props;
    const router = useRouter();
    const [isShowModal, setShowModal] = useState(false)
    const { makeContextualHref, returnHref } = useContextualRouting();

    useEffect(() => {
        setShowModal(open);
    }, [open])

    const closeModalHandler = () => {
        router.push(returnHref, undefined, { shallow: true })
    }


    return (
        <Transition.Root show={isShowModal ? true : false} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={() => closeModalHandler()}>
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <Dialog.Overlay className="absolute inset-0" />
                    <div className="fixed inset-y-28 top-0 right-0 left-0 w-full flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-300 sm:duration-400"
                            enterFrom="-translate-y-full"
                            enterTo="-translate-y-0"
                            leave="transform transition ease-in-out duration-300 sm:duration-400"
                            leaveFrom="-translate-y-0"
                            leaveTo="-translate-y-full"
                        >
                                <div className={`w-screen  ${width}`}>
                                    <div className="h-full flex flex-col bg-white">
                                            {/* Header */}
                                            <div className="absolute w-full px-4 py-2 bg-gradient-to-r from-sky-800 to-cyan-600 sm:px-6">
                                            <div className="container mx-auto max-w-7xl">
                                                <div className="flex items-start justify-between space-x-3">
                                                    <div className="space-y-1">
                                                        <Dialog.Title className="text-lg font-medium text-white">{title}</Dialog.Title>
                                                    </div>
                                                    <div className="h-7 flex items-center">
                                                        <button
                                                            type="button"
                                                            className="text-white hover:text-yellow-200"
                                                            onClick={() => closeModalHandler()}
                                                        >
                                                            <span className="sr-only">Close panel</span>
                                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="w-full h-12"></div>
                                        {/* Adding children here */}
                                        <div className="h-full flex flex-col bg-white overflow-y-scroll">
                                        {children}
                                        </div>
                                    </div>
                                </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
