/* This example requires Tailwind CSS v2.0+ */
import Image from "next/image";



export default function BodyCompanyDetailViewComponent({ userDetail }) {

  const { profile, userInfo, experience } = userDetail

  if (!userInfo) {
    return <p>Loading</p>;
  }

  return (
    <>
      <blockquote className="relative bg-white rounded-lg shadow-lg">
        <cite className="relative flex items-center sm:items-start bg-indigo-600 rounded-t-lg not-italic sm:py-3 sm:pl-12 sm:pr-10 mb-12">
          <div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:translate-y-6 sm:-translate-x-6">
            {profile?.imgUrl ? (<Image src={profile.imgUrl} alt="profile logo" width="80" height="80" className="rounded-full" />) : (
              <span className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gray-500">
                <span className="text-xl font-medium leading-none text-white">SN</span>
              </span>
            )}
          </div>
          <span className="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-20 sm:pl-1">
            <p className="text-white font-semibold sm:inline">{userInfo.firstName} {userInfo.lastName}</p>{' '}
            <p className="sm:inline">{experience[0].title}</p>
            <p className="sm:inline"> at {experience[0].companyName}</p>
          </span>
        </cite>
      </blockquote>
      <dl className="space-y-8 px-4 sm:px-6 sm:space-y-6">
        <div className='block mt-20'>
          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">About Us</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
            <p>
              {userInfo.aboutYou}
            </p>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Location</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{userInfo.location || 'Sri Lanka'}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Email Address</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{userInfo.emailAddress || 'Sri Lanka'}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Birthday</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
            <time dateTime="1988-06-23">{userInfo.dateOfBirth || 'Sri Lanka'}</time>
          </dd>
        </div>
      </dl>
    </>
  )
}
