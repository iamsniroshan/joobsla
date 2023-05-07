
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BellIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import Image from 'next/image'

const user = {
  name: 'Chelsea Hagon',
  email: 'chelseahagon@example.com',
  role: 'Human Resources Manager',
  //imageUrl:
  //  'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Profile', href: '#', current: false },
  { name: 'Resources', href: '#', current: false },
  { name: 'Company Directory', href: '#', current: false },
  { name: 'Openings', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile4', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function UserMenuComponent() {


  return (
    <Popover
    as="header"
    className="pb-24 bg-gradient-to-r from-sky-800 to-cyan-600"
  >
    {({ open }) => (
      <>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-0">
          <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
            <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
                {/* Left nav */}
                <div className="hidden lg:block lg:col-span-2">
                  <nav className="flex space-x-4">
                    {navigation.map((item,index) => (
                      <a
                        key={index}
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
                <div className="px-12 lg:px-0">
                  {/* Search */}
                  <div className="max-w-xs mx-auto w-full lg:max-w-md">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative text-white focus-within:text-gray-600">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
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

            {/* Menu button */}
            <div className="absolute right-0 flex-shrink-0 lg:hidden">
              {/* Mobile menu button */}
              <Popover.Button className="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-cyan-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Popover.Button>
            </div>
          </div>
        </div>

        <Transition.Root show={open} as={Fragment}>
          <div className="lg:hidden">
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay
                static
                className="z-20 fixed inset-0 bg-black bg-opacity-25"
              />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
                  <div className="pt-3 pb-2">
                    <div className="flex items-center justify-between px-4">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
                          alt="Workflow"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-3 px-2 space-y-1">
                      {navigation.map((item,index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 pb-2">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <Image src={user.imageUrl ? user.imageUrl : '/public/apps/profile.jpg'} alt="profile logo" width="80" height="80" />
                      </div>
                      <div className="ml-3 min-w-0 flex-1">
                        <div className="text-base font-medium text-gray-800 truncate">
                          {user.name}
                        </div>
                        <div className="text-sm font-medium text-gray-500 truncate">
                          {user.email}
                        </div>
                      </div>
                      <button className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-3 px-2 space-y-1">
                      {userNavigation.map((item,index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition.Child>
          </div>
        </Transition.Root>
      </>
    )}
  </Popover>
  );
}
