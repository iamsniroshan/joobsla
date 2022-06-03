/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon, ExclamationCircleIcon } from '@heroicons/react/solid'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SelectInput({ value, data = [], label, onChange, validate }) {
  const [selectedOption, setSelectedOption] = useState({})



  useEffect(() => {
    setSelectedOption(value)
  }, [value])


  return (
    <>
      <Listbox value={selectedOption} onChange={onChange}>
        {({ open }) => (
          <>
            <div className="relative my-6">
              <Listbox.Label className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-400 z-10">{label}</Listbox.Label>
              <Listbox.Button className={classNames(validate && !open ? "cursor-default relative w-full rounded-md border border-red-300 text-red-900 placeholder-red-300 pl-3 pr-10 py-2 text-left sm:text-sm focus:ring-0 focus:border-teal-600" : "cursor-default relative w-full rounded-md border border-gray-300 pl-3 pr-10 py-2 text-left sm:text-sm focus:ring-0 focus:border-teal-600")}>
                <span className="flex items-center">
                  <span className="block truncate">{selectedOption.label ? selectedOption.label : '.'}</span>
                </span>
                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
              {
                validate && !open && <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-xs text-red-600 mb-1 mr-2">{validate}</span> <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>
              }
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-20 border border-gray-300 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {data.map((eachItem) => {
                    const selected = eachItem.value === selectedOption.value ? true : false
                    return (
                      <Listbox.Option
                        key={eachItem.id}
                        className={({ active }) =>
                          classNames(
                            active ? 'bg-teal-600 text-white' : 'text-gray-900',
                            'cursor-default select-none relative py-2 pl-3 pr-3'
                          )
                        }
                        value={eachItem}
                      >
                        {({ active }) => (
                          <>
                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-teal-600',
                                  'absolute inset-y-0 left-0 flex items-center pl-1'
                                )}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                            <div className="flex items-center">
                              <span
                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-4 block truncate')}
                              >
                                {eachItem.label}
                              </span>
                            </div>
                          </>
                        )}
                      </Listbox.Option>
                    )
                  })}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </>
  )
}