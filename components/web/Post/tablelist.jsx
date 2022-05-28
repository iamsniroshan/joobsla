
import {
    MailIcon,
    PhoneIcon,
  
  } from "@heroicons/react/outline";
  import { SearchIcon, ViewGridAddIcon } from "@heroicons/react/solid";
  import { useContextualRouting } from "next-use-contextual-routing";
  import Link from "next/link";
  import MobileMenuComponent from "../MobileMenu";
  
  
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
    const people = [
      {
        name: "Jane Cooper",
        title: "Paradigm Representative",
        role: "Admin",
        email: "janecooper@example.com",
        telephone: "+1-202-555-0170",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      },
      {
        name: "Jane Cooper",
        title: "Paradigm Representative",
        role: "Admin",
        email: "janecooper@example.com",
        telephone: "+1-202-555-0170",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      },
      {
        name: "Jane Cooper",
        title: "Paradigm Representative",
        role: "Admin",
        email: "janecooper@example.com",
        telephone: "+1-202-555-0170",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      },
      {
        name: "Jane Cooper",
        title: "Paradigm Representative",
        role: "Admin",
        email: "janecooper@example.com",
        telephone: "+1-202-555-0170",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      },
      // More people...
    ];
  
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
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person.name}</div>
                          <div className="text-sm text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.title}</div>
                      <div className="text-sm text-gray-500">{person.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
  