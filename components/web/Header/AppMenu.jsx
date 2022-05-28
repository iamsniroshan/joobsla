/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Transition, Menu } from '@headlessui/react'
import { ViewBoardsIcon, DocumentAddIcon } from '@heroicons/react/solid'
import { useSession } from 'next-auth/client';
import Link from 'next/link'

const appsMenuData = [
  {
    name: 'Applications',
    description: 'Mange your jobs applications',
    href: '/user/application',
    srcUrl: '/apps/kb.png',
    icon: ViewBoardsIcon
  },
  {
    name: 'Add jobs',
    description: 'Add your jobs advertisement',
    href: '/user/post/list/table',
    srcUrl: '/apps/kb.png',
    icon: DocumentAddIcon
  }
]

function MyLink(props) {
  let { href, children, ...rest } = props
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  )
}

export default function AppMenuComponent() {
  const [session, loading] = useSession();

  return (
    <Menu as="div" className="flex-shrink-0 relative ml-5">
      {({ open }) => (
        <>
          {session && !loading && (
            <>
              <div>
                <Menu.Button className="bg-gray-200 text-sm text-gray-500 leading-none  border-gray-200 rounded-full inline-flex">
                  <button className="inline-flex items-center text-sky-800 transition-colors duration-300 ease-in focus:outline-none hover:text-blue-800  rounded-l-full px-4 py-2 active" id="grid">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fill-current w-4 h-4 mr-2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    <span className="h-4">Menu</span>
                  </button>
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
                <div
                  className="origin-top-right absolute z-10 right-0 mt-2 w-80 rounded-md shadow-lg bg-gradient-to-r from-sky-800 to-cyan-600 ring-1 ring-black ring-opacity-5 py-1 focus:outline-none"
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-1">
                      <Menu.Items>
                        {appsMenuData.map((item) => (
                          <Menu.Item>
                            <MyLink href={item.href}>
                              <div className="p-4 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                  <item.icon className="h-9 w-9" aria-hidden="true" />
                                </div>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                  <p className="mt-1  text-gray-500 text-xs">{item.description}</p>
                                </div>
                              </div>
                            </MyLink>
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </div>
                    <div className="p-5 bg-sky-50 sm:p-8">
                      <a
                        href="#"
                        className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100 transition ease-in-out duration-150"
                      >
                        <span className="flex items-center">
                          <span className="text-base font-medium text-gray-900">Enterprise</span>
                          <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800">
                            New
                          </span>
                        </span>
                        <span className="mt-1 block text-sm text-gray-500">
                          Empower your entire team with even more advanced tools.
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </Transition>
            </>
          )}
        </>
      )}
    </Menu>
  )
}
