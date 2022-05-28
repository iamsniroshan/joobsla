
import {
    MailIcon,
    PhoneIcon,

} from "@heroicons/react/outline";
import { SearchIcon, ViewGridAddIcon } from "@heroicons/react/solid";
import { useContextualRouting } from "next-use-contextual-routing";
import Link from "next/link";
import MobileMenuComponent from "../MobileMenu";

import { CalendarIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/react/solid'
const navigation = [
    { name: "Home", href: "#", current: true },
    { name: "Profile", href: "#", current: false },
    { name: "Resources", href: "#", current: false },
    { name: "Company Directory", href: "#", current: false },
    { name: "Openings", href: "#", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function PostCardListComponent() {
    const { makeContextualHref, returnHref } = useContextualRouting();
    const positions = [
        {
          id: 1,
          title: 'Back End Developer',
          type: 'Full-time',
          location: 'Remote',
          department: 'Engineering',
          closeDate: '2020-01-07',
          closeDateFull: 'January 7, 2020',
        },
        {
          id: 2,
          title: 'Front End Developer',
          type: 'Full-time',
          location: 'Remote',
          department: 'Engineering',
          closeDate: '2020-01-07',
          closeDateFull: 'January 7, 2020',
        },
        {
          id: 3,
          title: 'User Interface Designer',
          type: 'Full-time',
          location: 'Remote',
          department: 'Design',
          closeDate: '2020-01-14',
          closeDateFull: 'January 14, 2020',
        },
      ]

    return (
        <div className="relative min-h-screen bg-grayBg">
            <div
                as="header"
                className="pb-24 bg-gradient-to-r from-sky-800 to-cyan-600"
            >
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-0">
                    <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
                        <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
                            <div className="grid grid-cols-3 gap-4">
                                {/* Left nav */}
                                <div className="hidden lg:block lg:col-span-2">
                                    <nav className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? "text-white" : "text-cyan-100",
                                                    "text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
                                                )}
                                                aria-current={item.current ? "page" : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                                <div className="lg:hidden col-span-1">
                                    <MobileMenuComponent />
                                </div>
                                <div className="col-span-2 lg:col-span-1">
                                    {/* Search */}
                                    <div className="max-w-xs mx-auto w-full lg:max-w-md">
                                        <label htmlFor="search" className="sr-only">
                                            Search
                                        </label>
                                        <div className="relative text-white focus-within:text-gray-600">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                                <SearchIcon className="h-5 w-5" aria-hidden="true" />
                                            </div>
                                            <input
                                                id="search"
                                                className="block w-full text-white bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 focus:text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
                                                placeholder="Search"
                                                type="search"
                                                name="search"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main className="-mt-24 pb-8">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-0">
                    <h1 className="sr-only">Profile</h1>
                    {/* Main 1 column grid */}
                    <div className="grid grid-cols-1 gap-4 items-start post-list-height">
                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {positions.map((position) => (
          <li key={position.id}>
            <a href="#" className="block hover:bg-gray-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-indigo-600 truncate">{position.title}</p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {position.type}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <UsersIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                      {position.department}
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                      {position.location}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <p>
                      Closing on <time dateTime={position.closeDate}>{position.closeDateFull}</time>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
                    </div>

                </div>

            </main>
            <footer>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                    <div className="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left">
                        <span className="block sm:inline">
                            &copy; 2021 Tailwind Labs Inc.
                        </span>{" "}
                        <span className="block sm:inline">All rights reserved.</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
