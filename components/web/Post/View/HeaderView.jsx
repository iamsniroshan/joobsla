import { AcademicCapIcon } from '@heroicons/react/outline'
import {
    BriefcaseIcon,
    CalendarIcon,
    CurrencyDollarIcon,
    LocationMarkerIcon,
    PencilIcon,
} from '@heroicons/react/solid'
import { format } from 'date-fns'

export default function HeaderViewComponent({ jobDetailObj}) {

    const { jobDetail, jobSalary } = jobDetailObj

    if(!jobDetail) {
        return null
    }

    return (
        <>
            <header className="min-w-lg mt-4">
                <div className="max-w-7xl bg-gray-50 mx-auto py-8  px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between">
                    <div className="flex-1 min-w-0">
                        <h1 className="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            {jobDetail.jobTitle}
                        </h1>
                        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-8">
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <BriefcaseIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                {jobDetail.jobType.label}
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                Remote
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <CurrencyDollarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                {jobSalary.minAmount}{jobSalary.currency} &ndash; {jobSalary.maxAmount}{jobDetailObj.jobSalary.currency}
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                {format(new Date(jobDetail.expirationDate), 'dd MMMM yyyy')}
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 flex xl:mt-0 xl:ml-4">
                        <span className="hidden sm:block">
                            <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                            >
                                <AcademicCapIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </button>
                        </span>
                    </div>
                </div>
            </header>
        </>
    )
}
