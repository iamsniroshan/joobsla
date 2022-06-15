/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon, PencilAltIcon, PencilIcon } from '@heroicons/react/solid'
import { format } from 'date-fns';
import { useContextualRouting } from 'next-use-contextual-routing';
import Link from 'next/link';

export default function UserInformationComponent({ userInfo, cv,salary }) {

  const { makeContextualHref, returnHref } = useContextualRouting();

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 relative">
        <h3 className="text-lg leading-6 font-medium text-gray-900">User Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
        <Link scroll={false}
          href={makeContextualHref({ userInfoEditModal: true })}
        >
          <span className="flex absolute right-4 top-4 font-bold text-sm text-blue-600 pr-3 hover:text-green-600 cursor-pointer">
            <PencilAltIcon width="20" /> Edit
          </span>
        </Link>
      </div>
      <div className="border-t border-gray-200">
        {userInfo && <dl>
          {userInfo.firstName && <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userInfo.firstName} {userInfo?.lastName}</dd>
          </div>}
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Application for</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Backend Developer</dd>
          </div>
          {userInfo.emailAddress && <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userInfo.emailAddress}</dd>
          </div>}
          {salary.salaryExpectation && <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{salary.salaryExpectation} {salary.currency}</dd>
          </div>}
          {userInfo.dateOfBirth && <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Date of birth</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{format(new Date(userInfo.dateOfBirth), 'dd MMMM yyyy')}</dd>
          </div>}
          {userInfo.gender && <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Gender</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userInfo.gender}</dd>
          </div>}
          {userInfo.aboutYou && <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userInfo.aboutYou}</dd>
          </div>}
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 flex-1 w-0 truncate">{cv?.fileName.split(/_(.*)/s)[1]}</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>}
      </div>
    </div>
  )
}
