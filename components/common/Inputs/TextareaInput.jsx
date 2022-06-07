import { ExclamationCircleIcon } from '@heroicons/react/solid'
import React, { useState } from "react";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function TextareaInput({ value, label, name, placeholder, type, onChange, validate }) {
  const [focusToggle, setFocusToggle] = useState(true)

  return (
    <>
      <div className="mt-1 relative rounded-md shadow-sm">
        {label && <label
          htmlFor="name"
          className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-500"
        >
          {label}
        </label>}

        <textarea
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={() => setFocusToggle(!focusToggle)}
          onBlur={() => setFocusToggle(!focusToggle)}
          className={classNames(validate && focusToggle ? "block w-full pr-10 sm:text-sm border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-0 rounded-md" : "mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-0 focus:border-teal-600")}
        />
        {validate && focusToggle && <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-xs text-red-600 mb-1 mr-2">{validate}</span> <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        </div>}
      </div>
    </>
  )
}
