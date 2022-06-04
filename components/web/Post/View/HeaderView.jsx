import { Fragment, useState } from 'react'
import { Listbox, Menu, Transition } from '@headlessui/react'
import {
    BriefcaseIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    CurrencyDollarIcon,
    LinkIcon,
    LocationMarkerIcon,
    PencilIcon,
} from '@heroicons/react/solid'


const publishingOptions = [
    { name: 'Published', description: 'This job posting can be viewed by anyone who has the link.', current: true },
    { name: 'Draft', description: 'This job posting will no longer be publicly accessible.', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function HeaderViewComponent() {
    const [selected, setSelected] = useState(publishingOptions[0])

    return (
        <>
            <header className="min-w-lg mt-4">
                <div className="max-w-7xl bg-gray-50 mx-auto py-8  px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between">
                    <div className="flex-1 min-w-0">
                        <h1 className="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            Back End Developer
                        </h1>
                        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-8">
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <BriefcaseIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                Full-time
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                Remote
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <CurrencyDollarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                $120k &ndash; $140k
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                Closing on January 9, 2020
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 flex xl:mt-0 xl:ml-4">
                        <span className="hidden sm:block">
                            <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500"
                            >
                                <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                Edit
                            </button>
                        </span>

                        <span className="hidden sm:block ml-3">
                            <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500"
                            >
                                <LinkIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                View
                            </button>
                        </span>

                        <span className="sm:ml-3 relative z-0">
                            <Listbox value={selected} onChange={setSelected}>
                                {({ open }) => (
                                    <>
                                        <Listbox.Label className="sr-only">Change published status</Listbox.Label>
                                        <div className="relative">
                                            <div className="inline-flex shadow-sm rounded-md divide-x divide-purple-600">
                                                <div className="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-purple-600">
                                                    <div className="relative inline-flex items-center bg-purple-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        <p className="ml-2.5 text-sm font-medium">{selected.name}</p>
                                                    </div>
                                                    <Listbox.Button className="relative inline-flex items-center bg-purple-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-purple-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500">
                                                        <span className="sr-only">Change published status</span>
                                                        <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
                                                    </Listbox.Button>
                                                </div>
                                            </div>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options
                                                    static
                                                    className="origin-top-right absolute left-0 mt-2 -mr-1 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none sm:left-auto sm:right-0"
                                                >
                                                    {publishingOptions.map((option) => (
                                                        <Listbox.Option
                                                            key={option.name}
                                                            className={({ active }) =>
                                                                classNames(
                                                                    active ? 'text-white bg-purple-500' : 'text-gray-900',
                                                                    'cursor-default select-none relative p-4 text-sm'
                                                                )
                                                            }
                                                            value={option}
                                                        >
                                                            {({ selected, active }) => (
                                                                <div className="flex flex-col">
                                                                    <div className="flex justify-between">
                                                                        <p className={selected ? 'font-semibold' : 'font-normal'}>{option.name}</p>
                                                                        {selected ? (
                                                                            <span className={active ? 'text-white' : 'text-purple-500'}>
                                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                            </span>
                                                                        ) : null}
                                                                    </div>
                                                                    <p className={classNames(active ? 'text-purple-200' : 'text-gray-500', 'mt-2')}>
                                                                        {option.description}
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </>
                                )}
                            </Listbox>
                        </span>

                        {/* Dropdown */}
                        <Menu as="span" className="ml-3 relative sm:hidden">
                            {({ open }) => (
                                <>
                                    <Menu.Button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                        More
                                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                    </Menu.Button>

                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items
                                            static
                                            className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        >
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Edit
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        View
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </>
                            )}
                        </Menu>
                    </div>
                </div>
            </header>
        </>
    )
}
