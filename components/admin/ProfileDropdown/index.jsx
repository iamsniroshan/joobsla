import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useSession, signOut } from 'next-auth/react';
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from 'next/link'

export { ProfileDropdownComponent };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProfileDropdownComponent() {
  const {data:session} = useSession();



  // only show nav when logged in
  //if (!session && !loading) return null;

  return (
    <Menu as="div" className="ml-3 relative">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-0 lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                <span className="sr-only">Open user menu for </span>
                {session && (<span>{session.user.email}</span>)}
              </span>
              <ChevronDownIcon
                className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white focus:ring-0 divide-y divide-gray-200 focus:outline-none"
            >

              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/user/profile">
                      <a
                        href="/"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Your Profile
                      </a>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      onClick={signOut}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Logout
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
