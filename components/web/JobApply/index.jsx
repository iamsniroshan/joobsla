
import { useSession, signOut } from 'next-auth/react';
/* This example requires Tailwind CSS v2.0+ */
import {
  CheckIcon,
  PaperClipIcon,
  PencilAltIcon,
  PencilIcon,
} from "@heroicons/react/solid";
import { useQuery } from 'react-query';
import { getUserInfoApi } from 'services/api';
import { useState } from 'react';
import { format } from "date-fns";
import { PlusIcon } from '@heroicons/react/solid'
import Image from 'next/image';

const people = [
  {
    name: 'Lindsay Walton',
    handle: 'lindsaywalton',
    email: 'lindsaywalton@example.com',
    role: 'Front-end Developer',
    imageId: '1517841905240-472988babdf9',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
]

export default function JobApplyComponent() {

  const [userDetail, setUserDetail] = useState([]);
  const [isProfileSelected, setIsProfileSelected] = useState(false);

  const { isLoading, error, data } = useQuery('userInfoUseQuery', () => getUserInfoApi(), {
    onSuccess: (res) => setUserDetail(res.data)
  });

  const { data: session, status: loading } = useSession();

  const profileSelector = () => setIsProfileSelected(!isProfileSelected)

  if (isLoading) {
    return null
  }

  return (
    <>
      <div className="max-w-md mx-auto sm:max-w-3xl">
        <div>
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <h2 className="mt-2 text-lg font-medium text-gray-900">Login as member</h2>
            <p className="mt-1 text-sm text-gray-500">I am agree to share my detail to company</p>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide text-center">Select below profile and click apply</h3>
          <ul className="mt-4 w-100">
            {userDetail.map((user, personIdx) => (
              <li key={personIdx} onClick={profileSelector}>
                <button
                  type="button"
                  className={`group p-2 w-full flex items-center justify-between rounded-full border border-gray-300 shadow-sm space-x-3 text-left hover:bg-green-100 focus:outline-none ${isProfileSelected ? "bg-green-100" : ""}`}
                >
                  <span className="min-w-0 flex-1 flex items-center space-x-3">
                    <span className="block flex-shrink-0  h-10 w-10">
                      {user.profile.imgUrl
                        ? (<span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500">
                          <Image src={user.profile.imgUrl} alt="profile logo" width="21" height="21" className="rounded-full" />
                        </span>)
                        : (
                          <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500">
                            <span className="text-xl font-medium leading-none text-white">SN</span>
                          </span>
                        )}
                    </span>
                    <span className="block min-w-0 flex-1">
                      <span className="block text-sm font-medium text-gray-900 truncate">{user.userInfo.firstName} {user.userInfo.lastName}</span>
                      <span className="block text-sm font-medium text-gray-500 truncate">{user.userInfo.lastName}</span>
                    </span>
                  </span>
                  <span className="flex-shrink-0 h-10 w-10 inline-flex items-center justify-center">
                    {
                      isProfileSelected
                        ? <CheckIcon className="h-6 w-7 text-green-400 group-hover:text-gray-500" aria-hidden="true" />
                        : <PlusIcon className="h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                    }
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 grid w-100">
          <button
            disabled={!isProfileSelected ? true : false}
            type="submit"
            className="block text-md shadow bg-yellow-400 hover:bg-yellow-400 border border-yellow-500 hover:border-transparent focus:outline-none text-gray-800  py-1 px-6 rounded font-bold cursor-pointer w-100 uppercase disabled:bg-gray-400 disabled:border-gray-500 disabled:opacity-50"
          >
            Apply
          </button>
        </div>
      </div>
    </>
  )
}

