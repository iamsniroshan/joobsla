/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import Checkbox from "components/common/Inputs/checkbox";
import * as myConstClass from 'constant';
import { SelectInput, TextInput } from "components/common/Inputs";






export default function FilterComponent() {
  const [filterObj, setFilterObj] = useState({"jobType":[],"jobCategory":{}})


  const handleInputChange = ({ element, inputName, groupNme }) => {
    const data = { ...filterObj }
    if(groupNme) {
      element.target ?  data[groupNme][inputName] = element.target.value : data[groupNme][inputName] = element
    } else {
      element.target ?  data[inputName] = element.target.value : data[inputName] = element
    }
    setFilterObj(data);
  }
  

  return (
    <div className="sticky top-4 space-y-4">
      <section aria-labelledby="who-to-follow-heading">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flow-root">
              {/* <MultiSelectInput label="Type" data={myConstClass.jobTypeData} value={filterObj.jobType || []} onChange={(e) => handleInputChange({element:e,inputName:'jobType'})}/> */}
              <SelectInput label="Job Category" data={myConstClass.jobCatData} value={filterObj.jobCategory || {}} onChange={(e) => handleInputChange({ element: e, inputName: 'jobCategory', groupNme:'' })} />
              <SelectInput label="Job Type" data={myConstClass.jobTypeData} value={filterObj.jobType || {}} onChange={(e) => handleInputChange({ element: e, inputName: 'jobType', groupNme:'' })} />
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
      {JSON.stringify(filterObj)}
    </div>
  );
}
