/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const jobType = [
  { label: 'IT-Sware/DB/QA/Web/Graphics/GIS', value: '1', id: '1' },
  { label: 'IT-HWare/Networks/Systems', value: '2', id: '2' },
  { label: 'Accounting/Auditing/Finance', value: '3', id: '3' },
  { label: 'Banking/Insurance', value: '4', id: '4' },
  { label: 'Sales/Marketing/Merchandising', value: '5', id: '5' },
  { label: 'HR/Training', value: '6', id: '6' },
  { label: 'Corporate Management/Analysts', value: '7', id: '7' },
  { label: 'Office Admin/Secretary/Receptionist', value: '8', id: '8' },
  { label: 'Civil Eng/Interior Design/Architecture', value: '9', id: '9' },
  // { label: 'IT-Telecoms', value: '58', id: '5' },
  // { label: 'Customer Relations/Public Relations', value: '58', id: '5' },
  // { label: 'Logistics/Warehouse/Transport', value: '58', id: '5' },
  // { label: 'Eng-Mech/Auto/Elec', value: '58', id: '5' },
  // { label: 'Manufacturing/Operations', value: '58', id: '5' },
  // { label: 'Media/Advert/Communication', value: '58', id: '5' },
  // { label: 'Hotels/Restaurants/Food', value: '58', id: '5' },
  // { label: 'Hospitality/Tourism', value: '58', id: '5' },
  // { label: 'Hospitality/Tourism', value: '58', id: '5' },
  // { label: 'Sports/Fitness/Recreation', value: '58', id: '5' },
  // { label: 'Hospital/Nursing/Healthcare', value: '58', id: '5' },
  // { label: 'Legal/Law', value: '58', id: '5' },
  // { label: 'Supervision/Quality Control', value: '58', id: '5' },
  // { label: 'Apparel/Clothing', value: '58', id: '5' },
  // { label: 'Ticketing/Airline/Marine', value: '58', id: '5' },
  // { label: 'Teaching/Academic/Library', value: '58', id: '5' },
  // { label: 'R&D/Science/Research', value: '58', id: '5' },
  // { label: 'Agriculture/Dairy/Environment', value: '58', id: '5' },
  // { label: 'Security', value: '58', id: '5' },
  // { label: 'Fashion/Design/Beauty', value: '58', id: '5' },
  // { label: 'International Development', value: '58', id: '5' },
  // { label: 'KPO/BPO', value: '58', id: '5' },
  // { label: 'Imports/Exports', value: '58', id: '5' },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Select() {
  const [selected, setSelected] = useState({})

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative my-6">
          <Listbox.Label className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-400 z-10">Category</Listbox.Label>
            <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-300 pl-3 pr-10 py-2 text-left sm:text-sm focus:ring-0 focus:border-teal-600">
              <span className="flex items-center">
                <span className="block truncate">{selected.label ? selected.label: '.'}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 border border-gray-300 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {jobType.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-teal-600 text-white' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.label}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-teal-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}