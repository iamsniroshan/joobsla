import DatePicker from 'react-datepicker'
import { forwardRef} from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { format } from 'date-fns'

export default function DatePickerInput({label,value,onChange}) {

    return (
        <>
        <div className="mt-1 relative rounded-md shadow-sm">
        {label && <label
          htmlFor="name"
          className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-500"
        >
          {label}
        </label>}
            <DatePicker
                selected={new Date(value)}
                onChange={onChange}
                popperProps={{positionFixed: true}}
                nextMonthButtonLabel=">"
                previousMonthButtonLabel="<"
                popperClassName="react-datepicker-left"
                customInput={<ButtonInput />}
                renderCustomHeader={({
                    date,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                }) => (
                    <div className="flex items-center justify-between px-2 py-2">
                        <span className="text-lg text-gray-700">
                            {format(date, 'MMMM yyyy')}
                        </span>

                        <div className="space-x-2">
                            <button
                                onClick={decreaseMonth}
                                disabled={prevMonthButtonDisabled}
                                type="button"
                                className={`
                                            ${prevMonthButtonDisabled && 'cursor-not-allowed opacity-50'}
                                            inline-flex p-1 text-sm font-medium text-gray-700 bg-white border shadow-sm hover:bg-gray-50 border-gray-300 rounded-md focus:ring-0 focus:border-teal-600
                                        `}
                            >
                                <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
                            </button>

                            <button
                                onClick={increaseMonth}
                                disabled={nextMonthButtonDisabled}
                                type="button"
                                className={`
                                            ${nextMonthButtonDisabled && 'cursor-not-allowed opacity-50'}
                                            inline-flex p-1 text-sm font-medium text-gray-700 bg-white border shadow-sm hover:bg-gray-50 focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-teal-600
                                        `}
                            >
                                <ChevronRightIcon className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>
                    </div>
                )}
            />
            </div>
        </>
    )
}

const ButtonInput = forwardRef(({ value, onClick }, ref) => (
    <button
        onClick={onClick}
        ref={ref}
        type="button"
        className='inline-flex justify-start w-full px-3 py-2 text-sm font-medium text-gray-700 bg-white border shadow-sm hover:bg-gray-50 border-gray-300 rounded-md focus:ring-0 focus:border-teal-600'
    >
        {format(new Date(value), 'dd MMMM yyyy')}
    </button>
))