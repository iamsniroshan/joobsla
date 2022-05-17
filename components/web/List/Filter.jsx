/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";

const jobType = {
  'Full-Time': '10',
  'Internship':'20',
  'Part-Time':'100',
  'Contract':'10',
}

import SearchComponent from "components/common/Inputs/search";

export default function FilterComponent() {

  return (
    <div className="sticky top-4 space-y-4">
      <section aria-labelledby="who-to-follow-heading">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flow-root">
              <SearchComponent />
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="trending-heading">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flow-root">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 pb-1"
              >
                Job Type
              </label>
              <fieldset className="grid grid-cols-2 gap-3 pt-3">
              {Object.keys(jobType).map((key,index) => (
                   <div className="flex" key={index}>
                   <div className="flex items-center h-5">
                     <input
                       id="comments"
                       aria-describedby="comments-description"
                       name="comments"
                       type="checkbox"
                       className="focus:ring-0 h-4 w-4 text-sky-800 border-gray-300 rounded"
                     />
                   </div>
                   <div className="ml-3 text-sm">
                     <label
                       className="font-normal text-gray-500"
                     >
                      {key}
                     </label>
                   </div>
                 </div>
                  ))}
             
                
              </fieldset>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
