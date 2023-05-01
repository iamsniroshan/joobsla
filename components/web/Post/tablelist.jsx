
import { SearchIcon } from "@heroicons/react/solid";
import { useContextualRouting } from "next-use-contextual-routing";
import Link from "next/link";
import { format } from 'date-fns'

import { CalendarIcon, LocationMarkerIcon, UsersIcon, ArrowCircleRightIcon } from '@heroicons/react/solid'
import { useQuery } from "react-query";
import getJobPostApi from "services/api/getJobPost";
import ShimmerLoader from "components/common/Loader/shimmerLoader";


export default function PostCardListComponent() {

  const { makeContextualHref, returnHref } = useContextualRouting();
  const { isLoading, error, data } = useQuery('jobPostUseQuery', () => getJobPostApi());

  // if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="relative bg-grayBg">
        <div
          as="header"
          className="pb-24 bg-gradient-to-r from-sky-800 to-cyan-600"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-0">
            <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
              <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
                <div className="grid grid-cols-3 gap-4">
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
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                  <div className="ml-4 mt-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Job Postings</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.
                    </p>
                  </div>
                  <div className="ml-4 mt-4 flex-shrink-0">
                    <Link scroll={false}
                      href={makeContextualHref({ openPostAddModal: true })}
                    >
                      <button
                        type="button"
                        className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0"
                      >
                        Create new job
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {
                isLoading
                  ? <ShimmerLoader repeatCount="10" />
                  :
                  <ul className="divide-y divide-gray-200">
                    {data.data.map((eachPost) => (
                      <li key={eachPost._id}>
                        <a href="#" className="block hover:bg-gray-50">
                          <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-indigo-600 truncate">{eachPost.jobDetail.jobTitle}</span>


                              <div className="ml-2 flex-shrink-0 flex">

                                <div className="flex -space-x-1 relative z-0 overflow-hidden">
                                  <span className="block mr-4">
                                    <img
                                      className="relative z-30 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                      alt=""
                                    />
                                    <img
                                      className="relative z-20 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                      alt=""
                                    />
                                    <img
                                      className="relative z-10 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                      alt=""
                                    />
                                    <img
                                      className="relative z-0 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                      alt=""
                                    />
                                  </span>

                                  <span className="block"><ArrowCircleRightIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 mt-1" aria-hidden="true" /></span>
                                  <span className="block text-sm font-medium text-indigo-600 truncate p-1">View applications</span>
                                </div>
                              </div>

                            </div>
                            <div className="mt-2 sm:flex sm:justify-between">
                              <div className="sm:flex">
                                <p className="flex items-center text-sm text-gray-500">
                                  <UsersIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                  {eachPost.department}
                                </p>
                                <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                  <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                  {eachPost.jobDetail.jobType.label}
                                </p>
                                <span className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                  <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                  <p>
                                    Closing on {format(new Date(eachPost.jobDetail.expirationDate), 'dd MMMM yyyy')}
                                  </p>
                                </span>
                                <span className="px-2 ml-5 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  {'approved'}
                                </span>
                              </div>
                              <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                <span className="block text-sm font-medium text-red-600 truncate p-0">Delete</span>
                                <span className="block text-sm font-medium text-green-600 truncate p-0 ml-6">Edit</span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
              }

            </div>
          </div>
        </main>
        <footer>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left">
              <span className="block sm:inline">
                &copy; 2021 LotJobs Pvt Ltd..
              </span>{" "}
              <span className="block sm:inline">All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
