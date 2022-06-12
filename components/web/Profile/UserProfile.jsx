import Image from "next/image";


const user = {
  name: 'Chelsea Hagon',
  email: 'chelseahagon@example.com',
  role: 'Human Resources Manager',
  //imageUrl:
  //  'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const stats = [
  { label: 'Vacation days left', value: 12 },
  { label: 'Sick days left', value: 4 },
  { label: 'Personal days left', value: 2 },
]




export default function UserProfileComponent({ profile, userInfo }) {




  return (
    <>
      <section aria-labelledby="profile-overview-title">
        <div className="rounded-lg bg-white overflow-hidden shadow">
          <h2 className="sr-only" id="profile-overview-title">
            Profile Overview
          </h2>
          <div className="bg-white p-6">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="sm:flex sm:space-x-5">
                <div className="flex-shrink-0">
                  {profile?.imgUrl ? (<Image src={profile?.imgUrl} alt="profile logo" width="80" height="80" className="rounded-full" />) : (
                    <span className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gray-500">
                      <span className="text-xl font-medium leading-none text-white">SN</span>
                    </span>
                  )}
                </div>
                <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                  <p className="text-sm font-medium text-gray-600">
                    Welcome back,
                  </p>
                  <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                    {userInfo?.firstName} {userInfo?.lastName}
                  </p>
                  <p className="text-sm font-medium text-gray-600">
                    {userInfo?.emailAddress}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex justify-center sm:mt-0">
                <a
                  href="#"
                  className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  View profile
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="px-6 py-5 text-sm font-medium text-center"
              >
                <span className="text-gray-900">{stat.value}</span>{" "}
                <span className="text-gray-600">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
