/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
const jobType = {
  'Full-Time': '10',
  'Internship': '20',
  'Part-Time': '100',
  'Contract': '10',
}

import Select from "components/common/Inputs/select";
import TextInput from "components/common/Inputs/TextInput";
import Search from "components/common/Inputs/search";
import Checkbox from "components/common/Inputs/checkbox";

export default function FilterComponent() {

  return (
    <div className="sticky top-4 space-y-4">
      <section aria-labelledby="who-to-follow-heading">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flow-root">
              <Search />
              <Select />
              <TextInput type="text" label="Job Type"
                name="jobType"/>
              <Checkbox/>
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="trending-heading">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flow-root">
            <Checkbox/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
