import { ClockIcon } from "@heroicons/react/outline";
import Date from "components/common/Date";
import DateDiff from "components/common/DateDiff";

export default function Card(props) {
	return (
		<a className='transition block p-5 bg-white rounded-md shadow cursor-move ghost-card'>
			<div className='flex items-center justify-between space-x-4'>
				<span className="inline-flex text-sm text-gray-500 items-center justify-between">
                                <ClockIcon className="h-4 w-4 font-light" aria-hidden="true" />
                                <span className="font-light text-sm text-gray-500 pl-2">
                                  <DateDiff isoDate={props.componentToPassDown.createdAt} />
                                </span>
                            </span>
				<img
					className='w-14 h-6 object-contain'
					src='https://looka.com/wp-content/themes/looka/images/logos/looka_logo_black.svg'
					alt=''
				/>
			</div>
			<div className='flex items-center justify-between space-x-4 py-2'>
				<span className='text-sm text-gray-900 truncate'>
					{props.componentToPassDown.jobTitle}
				</span>
			</div>
			<p class="text-sm text-gray-700 overflow-hidden h-14">
				{props.componentToPassDown.sortDesc}
			</p>
			<div className='flex items-center justify-between mt-4'>
				<p className='text-xs px-2 dark:text-neutral-300 text-green-700 bg-green-100 rounded'>
					{props.componentToPassDown.jobType}
				</p>
				<a href="#" class="flex text-gray-700 text-xs">
					<svg fill="none" viewBox="0 0 24 24" class="w-5 h-5 text-blue-500" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
					</svg>
					5
				</a>
			</div>
		</a>
	);
}
