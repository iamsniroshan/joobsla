import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  ArrowRightIcon,
  CodeIcon,
  EyeIcon,
  FlagIcon,
  ShareIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { jobsFilterAtom } from "atoms-store";
import { useAtom } from "jotai";
import { format } from 'date-fns';
import Date from "components/common/Date";
import { BriefcaseIcon, ClockIcon, TagIcon } from "@heroicons/react/outline";
import Link from "next/dist/client/link";
import { useContextualRouting } from "next-use-contextual-routing";
import ShimmerLoader from "components/common/Loader/shimmerLoader";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const InfiniteScrollComponent = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [filterObj, setFilterObj] = useAtom(jobsFilterAtom);
  const { makeContextualHref, returnHref } = useContextualRouting();

  useEffect(() => {
    setPosts([]);
    setHasMore(true);
    getMorePost('initial-call')
  }, [filterObj]);

  const getMorePost = async (tag) => {
    const pageLimit = 12
    const pageNumber = tag === 'initial-call' ? 1 : Math.round((posts.length / pageLimit) + 1)
    if(pageNumber === 1) setIsLoading(true)
    const res = await fetch(`/api/jobpost/search`, {
      method: "POST",
      body: JSON.stringify({
        filters: cleanObj(filterObj),
        limit: pageLimit,
        page: pageNumber,
        query: "",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if(res.ok) {
      setIsLoading(false)
    }
    const newPosts = await res.json();
    if(newPosts.data.length > 0) setIsLoading(false)
    if (newPosts.data.length === 0) {
      setHasMore(false);
    }
    setPosts((post) => [...post, ...newPosts.data]);
  };

  const cleanObj = (obj) => {
    var cloneObj = { ...obj };
    for (var propName in cloneObj) {
      if (
        cloneObj[propName] === null ||
        cloneObj[propName] === undefined ||
        JSON.stringify(cloneObj[propName]) === "[]" ||
        JSON.stringify(cloneObj[propName]) === "{}"
      ) {
        console.log(cloneObj[propName]);
        delete cloneObj[propName];
      }
    }
    return cloneObj;
  };

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length}
        next={() => getMorePost('scroll-to-call')}
        hasMore={hasMore}
        loader={<div className="w-full align-middle text-center pt-4">Loading...</div> }
        endMessage={<div className="w-full align-middle text-center pt-4">Nothing more to show</div>}
      >
        {isLoading ? <ShimmerLoader repeatCount="12" type="home-page-job-list"/>:
                <ul className="grid grid-cols-3 gap-4">
                {posts.map((job,index) => (
                  <li
                    key={index}
                    className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg hover:border-solid hover:cursor-pointer"
                  >
                    <article aria-labelledby={"job-title-" + job._id}>
                      <div>
                        <div className="flex space-x-3">
                          <div className="flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
                              alt=""
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h2
                              id={"job-title-" + job._id}
                              className="mt-0 text-base font-medium text-gray-900 truncate"
                            >
                              {job.jobDetail.jobTitle}
                            </h2>
                            <p className="text-sm font-medium text-gray-900 truncate">
                              <a
                                href={'www.google.com'}
                                className="hover:underline text-orange-600"
                              >
                                {'company name'}
                              </a>
                            </p>
      
                          </div>
      
                        </div>
                        <div className="flex-shrink-0 self-center flex pt-2">
                            <span className="inline-flex items-center text-sm mr-4">
                              <button className="inline-flex space-x-2 text-gray-600 hover:text-gray-500">
                                <ClockIcon className="h-5 w-5 font-light" aria-hidden="true" />
                                <span className="font-light">
                                  <Date dateString={job.createdAt} dateFormate={'LLLL d, yyyy'} />
                                </span>
                                <span className="sr-only">Created date</span>
                              </button>
                            </span>
                            <Menu
                              as="div"
                              className="relative inline-block text-left"
                            >
                              {({ open }) => (
                                <>
                                  <div>
                                    <Menu.Button className="inline-flex align-sub">
                                      <span className="inline-flex items-center text-sm">
                                        <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                          <ShareIcon className="h-5 w-5" aria-hidden="true" />
                                          <span className="font-medium">
                                            Share
                                          </span>
                                          <span className="sr-only">Share</span>
                                        </button>
                                      </span>
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
                                      className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    >
                                      <div className="py-1">
                                        <Menu.Item>
                                          {({ active }) => (
                                            <a
                                              href="#"
                                              className={classNames(
                                                active
                                                  ? "bg-gray-100 text-gray-900"
                                                  : "text-gray-700",
                                                "flex px-4 py-2 text-sm"
                                              )}
                                            >
                                              <StarIcon
                                                className="mr-3 h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                              />
                                              <span>Add to favorites</span>
                                            </a>
                                          )}
                                        </Menu.Item>
                                        <Menu.Item>
                                          {({ active }) => (
                                            <a
                                              href="#"
                                              className={classNames(
                                                active
                                                  ? "bg-gray-100 text-gray-900"
                                                  : "text-gray-700",
                                                "flex px-4 py-2 text-sm"
                                              )}
                                            >
                                              <CodeIcon
                                                className="mr-3 h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                              />
                                              <span>Embed</span>
                                            </a>
                                          )}
                                        </Menu.Item>
                                        <Menu.Item>
                                          {({ active }) => (
                                            <a
                                              href="#"
                                              className={classNames(
                                                active
                                                  ? "bg-gray-100 text-gray-900"
                                                  : "text-gray-700",
                                                "flex px-4 py-2 text-sm"
                                              )}
                                            >
                                              <FlagIcon
                                                className="mr-3 h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                              />
                                              <span>Report content</span>
                                            </a>
                                          )}
                                        </Menu.Item>
                                      </div>
                                    </Menu.Items>
                                  </Transition>
                                </>
                              )}
                            </Menu>
                          </div>
                      </div>
                      <p
                        className="mt-2 text-sm text-gray-700 space-y-4 overflow-hidden h-16"
                        dangerouslySetInnerHTML={{ __html: job.jobDescription.sortDesc }}
                      ></p>
                      <div className="mt-6 flex justify-between space-x-8">
                        <div className="flex">
                          <span className="inline-flex items-center text-sm">
                            <button className="inline-flex space-x-2 text-green-400 hover:text-gray-500">
                              {/* <BriefcaseIcon className="h-5 w-5" aria-hidden="true" /> */}
                              <span className="text-xs inline-flex items-center leading-sm px-3 py-1 bg-green-100 text-green-700 font-bold">
                                {job.jobDetail.jobType.label}
                              </span>
                              <span className="sr-only">Job type</span>
                            </button>
                          </span>
                          {/* <span className="inline-flex items-center text-sm">
                            <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                              <TagIcon className="h-5 w-5" aria-hidden="true" />
                              <span className="font-medium text-gray-400 hover:text-gray-500">
                                {job.jobDetail.jobCategory.label}
                              </span>
                              <span className="sr-only">Job category</span>
                            </button>
                          </span> */}
                          {/* <span className="inline-flex items-center text-sm">
                            <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                              <EyeIcon className="h-5 w-5" aria-hidden="true" />
                              <span className="font-medium text-gray-400 hover:text-gray-500">
                                {job.jobSalary.minAmount} - {job.jobSalary.maxAmount} {job.jobSalary.currency}
                              </span>
                              <span className="sr-only">views</span>
                            </button>
                          </span> */}
                        </div>
                        <div className="flex text-sm">
                          <span className="inline-flex items-center text-sm align-sub">
                            <Link legacyBehavior={true} scroll={false}
                              href={makeContextualHref({ openPostViewAndApply: true, jobId: job._id , viewType : 'view'})}
                            >
                              <button className="inline-flex space-x-2 text-blue-600 hover:text-blue-900">
                                <span className="font-medium">
                                  Apply
                                </span>
                                <span className="sr-only">Apply</span>
                                <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
                              </button>
                            </Link>
                          </span>
                        </div>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
        }

      </InfiniteScroll>
      <style jsx>
        {`
          .back {
            padding: 10px;
            background-color: dodgerblue;
            color: white;
            margin: 10px;
          }
        `}
      </style>
    </>
  );
};

export default InfiniteScrollComponent;
