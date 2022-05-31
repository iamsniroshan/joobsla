
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
    <div className="relative  bg-grayBg">
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
      <main className="-mt-24 pb-8 main-height">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-0">
          <h1 className="sr-only">Profile</h1>
          {/* Main 1 column grid */}
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-4 lg:grid-cols-4">
            <li className="flex col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
              <Link scroll={false}
                href={makeContextualHref({ openPostAddModal: true })}
                className="ml-6 inline-flex items-center"
              >
                <button
                  type="button"
                  className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-6 m-2 text-center hover:border-sky-800  focus:outline-none focus:ring-0"
                >
                  <ViewGridAddIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <span className="mt-2 block text-sm font-medium text-gray-900">
                    Create a new Job ads
                  </span>
                </button>
              </Link>

            </li>
            {people.map((person) => (
              <li
                key={person.email}
                className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
              >
                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium truncate">
                        {person.name}
                      </h3>
                      <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                        {person.role}
                      </span>
                    </div>
                    <p className="mt-1 text-gray-500 text-sm truncate">
                      {person.title}
                    </p>
                  </div>
                  <img
                    className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                    src={person.imageUrl}
                    alt=""
                  />
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="w-0 flex-1 flex">
                      <a
                        href={`mailto:${person.email}`}
                        className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                      >
                        <MailIcon
                          className="w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">Email</span>
                      </a>
                    </div>
                    <div className="-ml-px w-0 flex-1 flex">
                      <a
                        href={`tel:${person.telephone}`}
                        className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                      >
                        <PhoneIcon
                          className="w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">Call</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left">
            <span className="block sm:inline">
              &copy; 2021 LotJobs Pvt Ltd.
            </span>{" "}
            <span className="block sm:inline">All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
