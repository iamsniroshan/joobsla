import { PencilAltIcon } from '@heroicons/react/outline'
import ExperienceComponent from './Experience'
import UserInformationComponent from './UserInformation'
import { useContextualRouting } from 'next-use-contextual-routing';
import Link from 'next/link'
import UserMenuComponent from './UserMenu'
import UserProfileComponent from './UserProfile'
import { useQuery } from 'react-query';
import { getUserInfoApi } from 'services/api';
import { useState } from 'react';




export default function ProfileComponent() {

    const [userDetail, setUserDetail] = useState({});

    const { isLoading, error, data } = useQuery('userInfoUseQuery', () => getUserInfoApi(),{
        onSuccess: (data) => setUserDetail(data.data[0])
    });
    const { makeContextualHref, returnHref } = useContextualRouting();

    return (
        <>
            <div className="relative bg-grayBg">
                <UserMenuComponent />
                <main className="-mt-24 pb-8 main-height">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-0">
                        <h1 className="sr-only">Profile</h1>
                        {/* Main 3 column grid */}
                        <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                            {/* Left column */}
                            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                                {/* user Profile */}
                                <UserProfileComponent profile={userDetail.profile} userInfo={userDetail.userInfo}/>
                                {/* Actions panel */}
                                <section aria-labelledby="quick-links-title">
                                    <UserInformationComponent userInfo={userDetail.userInfo} cv={userDetail.cv} salary={userDetail.salary}/>
                                </section>
                            </div>

                            {/* Right column */}
                            <div className="grid grid-cols-1 gap-4">
                                {/* Announcements */}
                                <section aria-labelledby="announcements-title">
                                    <div className="rounded-lg bg-white overflow-hidden shadow">
                                        <div className="p-6 relative">
                                            <h2
                                                className="text-base font-medium text-gray-900"
                                                id="announcements-title"
                                            >
                                                Experience
                                            </h2>
                                            <Link scroll={false}
                                                href={makeContextualHref({ experienceEditModal: true })}
                                            >
                                                <span className="flex absolute right-4 top-4 font-bold text-sm text-blue-600 pr-3 hover:text-green-600 cursor-pointer">
                                                    <PencilAltIcon width="20" /> ADD
                                                </span>
                                            </Link>
                                            <div className="flow-root mt-6">
                                                <ExperienceComponent experience={userDetail.experience}/>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
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
