import Image from 'next/image'
import { ClockIcon, HomeIcon, UserGroupIcon,CogIcon,QuestionMarkCircleIcon,ShieldCheckIcon } from '@heroicons/react/outline'
import Link from 'next/link'
const navigation = [
    { name: 'Home', href: '/admin/home', icon: HomeIcon, current: true },
    { name: 'User Pool', href: '/admin/userpool', icon: UserGroupIcon, current: false },
  ]

  const teams = [
    { name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
    { name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
    { name: 'Customer Success', href: '#', bgColorClass: 'bg-yellow-500' },
  ]

  const secondaryNavigation = [
    { name: 'Settings', href: '#', icon: CogIcon },
    { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
    { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
  ]

export default function DesktopLeftNavComponent() {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }


    return (
    <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64 border-r-0 border-gray-200 pt-0 pb-0 bg-gray-100">
          <div className="flex items-center flex-shrink-0 px-6 border-r border-teal-900 bg-teal-900 mt-1 py-4">
          <Image src="/logos/admin-logo.png" alt="admin logo"  width="407.5" height="53.5"/>
          </div>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow border-r bg-cyan-700 border-cyan-700 pt-5 pb-4 overflow-y-auto">
            <nav className="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
              <div className="px-2 space-y-1">
                {navigation.map((item,index) => (
                   <Link href={item.href}>
                  <a
                    key={index}
                    className={classNames(
                      item.current ? 'bg-cyan-800 text-white' : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                      'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
             
                    <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200" aria-hidden="true" />
                    {item.name}
                  </a>
                  </Link>
                ))}
              </div>
              <div className="mt-6 pt-6">
                <div className="px-2 space-y-1">
                  {secondaryNavigation.map((item,index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                    >
                      <item.icon className="mr-4 h-6 w-6 text-cyan-200" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      )}