/* This example requires Tailwind CSS v2.0+ */
import { useState, useEffect } from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import Select from 'react-tailwindcss-select';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SelectInput({ value, data = [], label, onChange, validate, isClearable=false}) {
  const [selectedOption, setSelectedOption] = useState({})
  const [focusToggle, setFocusToggle] = useState(true)


  useEffect(() => {
    setSelectedOption(value)
  }, [value])


  return (
    <>
      <div className="mt-1 relative rounded-md shadow-sm">
        {label && <label
          htmlFor="name"
          className="absolute -top-2 left-2 -mt-px z-[5] inline-block px-1 bg-white text-xs font-medium text-gray-500"
        >
          {label}
        </label>}
        <div></div>
        <div  className={`container ${label.split(" ").join("-").toLowerCase()} ${ validate && focusToggle ? 'non-validate': 'validate'}`}>
          <Select
            primaryColor={"sky"}
            placeholder={'label'}
            options={data}
            value={selectedOption}
            onChange={onChange}
            isMultiple={false}
            isClearable={isClearable && !!selectedOption.value}
            onFocus={() => setFocusToggle(!focusToggle)}
            onBlur={() => setFocusToggle(!focusToggle)}
          />
          <style jsx>{`
            .container :global(.items-stretch) {
              height: 38px
          }
          .non-validate :global(.items-stretch) {
              --tw-border-opacity: 1;
              border-color: rgb(252 165 165 / var(--tw-border-opacity));
          }
          
          .container :global(.items-stretch.ring-2) {
              --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
              --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
              box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
          }
          
          .validate :global(.ring-opacity-0) {
              --tw-border-opacity: 1;
              border-color: rgb(209 213 219 / var(--tw-border-opacity));
          }
          `}</style>
        </div>
        {validate && focusToggle && <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-xs text-red-600 mb-1 mr-2">{validate}</span> <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        </div>}
      </div>
    </>
  )
}