/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

const profile = {
  name: 'Ricardo Cooper',
  email: 'ricardo.cooper@example.com',
  avatar:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  backgroundImage:
    'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  fields: [
    ['Phone', '(555) 123-4567'],
    ['Email', 'ricardocooper@example.com'],
    ['Title', 'Senior Front-End Developer'],
    ['Team', 'Product Development'],
    ['Location', 'San Francisco'],
    ['Sits', 'Oasis, 4th floor'],
    ['Salary', '$145,000'],
    ['Birthday', 'June 8, 1990'],
  ],
}


const tabs = [
    { name: 'Profile', href: '#', current: true },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Recognition', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function BodyCompanyDetailViewComponent() {


    return (
        <>
 <blockquote className="relative bg-white rounded-lg shadow-lg">

              <cite className="relative flex items-center sm:items-start bg-indigo-600 rounded-t-lg not-italic sm:py-3 sm:pl-12 sm:pr-10 mb-12">
                <div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:translate-y-6 sm:-translate-x-6">
                  <img
                    className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300"
                    src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80"
                    alt=""
                  />
                </div>
                <span className="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-20 sm:pl-1">
                  <p className="text-white font-semibold sm:inline">GoPro Counsultency (pvt) Ltd</p>{' '}
                  <p className="sm:inline">CEO at Workcation</p>
                </span>
              </cite>
            </blockquote>


            <dl className="space-y-8 px-4 sm:px-6 sm:space-y-6">
                <div>
                    <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Bio</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                        <p>
                            Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus
                            feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum
                            aenean arcu.
                        </p>
                    </dd>
                </div>
                <div>
                    <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Location</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">New York, NY, USA</dd>
                </div>
                <div>
                    <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Website</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">ashleyporter.com</dd>
                </div>
                <div>
                    <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Birthday</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                        <time dateTime="1988-06-23">June 23, 1988</time>
                    </dd>
                </div>
            </dl>
        </>
    )
}
