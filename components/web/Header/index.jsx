import { Menu, Popover, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {
  SearchIcon,
} from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon, HomeIcon, FireIcon, UserGroupIcon, TrendingUpIcon, ViewGridIcon } from '@heroicons/react/outline'
import AppMenuComponent from './AppMenu'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContextualRouting } from 'next-use-contextual-routing';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image'
import InjectorComponent from '../Injectors'
import MobileMenuComponent from '../MobileMenu'


const user = {
  name: 'Chelsea Hagon',
  email: 'chelseahagon@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}


export default function HeaderComponent() {
  const router = useRouter();
  const { makeContextualHref, returnHref } = useContextualRouting();
  const {data:session, status:loading } = useSession();


  return (
    <>
    {JSON.stringify(session)}
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <div
        as="header"
        className='bg-white shadow-md lg:static lg:overflow-y-visible'
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
            <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <a href="#">
                    <Image src="/logos/web-logo.png" alt="admin logo" width="120" height="43.8" />
                  </a>
                </Link>
                <Link href="/">
                  <a className="text-sm font-medium text-gray-900 hover:underline pl-32">
                    Home
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
              <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                <div className="w-full">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <SearchIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden h-16">
              {/* Mobile menu button */}
              <MobileMenuComponent/>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
              {/* View notifications */}
              {session && loading === 'authenticated' && (<a
                href="#"
                className="ml-5 mr-3 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </a>)}


              {/* View apps menu */}
              <AppMenuComponent />


              {/* Profile dropdown */}
              <Menu as="div" className="flex-shrink-0 relative ml-5">
                {({ isOpenMenu }) => (
                  <>
                    {session && loading === 'authenticated' && (
                      <>
                        <div>
                          <Menu.Button className="bg-white flex focus:outline-none rounded-full hover:bg-gray-200  border-gray-200">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-9 w-9 rounded-full border-4 border-gray-200"
                              src={user.imageUrl}
                              alt=""
                            />
                            <span className="flex px-3 h-8 w-full pt-1 pb-2 rounded-full">
                              {session.user.email}
                            </span>
                          </Menu.Button>
                        </div>
                        <Transition
                          show={isOpenMenu}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none"
                          >
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                    } group text-gray-700 hover:bg-gray-100 flex rounded-md items-center w-full py-2 text-sm px-4`}
                                >
                                  <Link href="/user/profile">
                                    <a>
                                      Your Profile
                                    </a>
                                  </Link>
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={signOut}
                                  className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                    } group text-gray-700 hover:bg-gray-100 flex rounded-md items-center w-full py-2 text-sm px-4`}
                                >
                                    <a>
                                      Logout
                                    </a>
                                </button>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </>
                )}
              </Menu>

              {!session && loading === 'authenticated' && (
                <>
                  <Link
                    href={makeContextualHref({ openLoginModal: true })}
                    as="/login"
                    shallow
                    className="ml-6 inline-flex items-center"
                  >
                    <button class="block text-md mx-auto shadow bg-yellow-400 hover:bg-yellow-400 border-yellow-500 focus:shadow-outline focus:outline-none text-gray-800  py-1 px-10 rounded">Create New Account</button>

                  </Link>
                  <Link
                    href={makeContextualHref({ openLoginModal: true })}
                    as="/login"
                    shallow
                    className="ml-6 inline-flex items-center"
                  >
                    <button class="px-5 py-1 text-md text-white bg-gradient-to-r from-sky-800 to-cyan-600 rounded-md focus:shadow-outline hover:bg-indigo-800">Log In</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <InjectorComponent />
    </>
  );
}
