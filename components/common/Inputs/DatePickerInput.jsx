import DatePicker from 'react-datepicker'
import { forwardRef, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { format, isValid } from 'date-fns'
import range from 'lodash/range'

export default function DatePickerInput({ label, value, onChange }) {

    const years = range(1960, (new Date()).getFullYear()+1);

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
                    selected={isValid(new Date(value)) ? new Date(value) : value }
                    onChange={onChange}
                    popperProps={{ positionFixed: true }}
                    yearDropdownItemNumber={10}
                    scrollableYearDropdown
                    nextMonthButtonLabel=">"
                    previousMonthButtonLabel="<"
                    popperClassName="react-datepicker-left"
                    customInput={<ButtonInput />}
                    renderCustomHeader={({
                        date,
                        changeYear,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled,
                    }) => (
                        <div className="flex items-center justify-between px-2 py-2">
                            <span className="text-lg text-gray-700">
                                {isValid(date) ? (format(date, 'MMMM')) : 'MMMM'}
                                {CustomYearDropdownPicker({ years,date, changeYear })}
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
        className='inline-flex justify-start h-[38px] w-full px-3 py-2 text-sm font-medium text-gray-700 bg-white border shadow-sm hover:bg-gray-50 border-gray-300 rounded-md focus:ring-0 focus:border-teal-600'
    >
        {isValid(new Date(value)) ? (format(new Date(value), 'dd MMMM yyyy')) : <span className='text-gray-500 text-opacity-25'>dd MMMM yyyy</span>}
    </button>
))

function CustomYearDropdownPicker({ years,date, changeYear }) {
    return (
        <>
            <select
            className='pt-0 pb-0 pr-10 pl-2 ml-2 inline-flex p-1  text-gray-700 bg-white border shadow-sm hover:bg-gray-50 focus:outline-none border-gray-300 rounded-md focus:ring-0 focus:border-teal-600'
                value={(date).getFullYear()}
                onChange={({ target: { value } }) => changeYear(value)}
            >
                {years.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </>
    );
}