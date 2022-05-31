import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { AddPostWizardContext } from 'components/context';
import React, { useContext } from "react";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function TextInput({ value, label, name, placeholder, type, onChange, required = false }) {

  const { proceedNext } = useContext(AddPostWizardContext); // Context API
    const isValidate = !proceedNext && required && !value

  return (
    <div className="relative my-6">
      {label && <label
        htmlFor="name"
        className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-500"
      >
        {label}
      </label>}

      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={classNames(isValidate ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-0 rounded-md" :"mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-0 focus:border-teal-600")}
      />
      {isValidate && <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        </div>}
    </div>
  )
}
