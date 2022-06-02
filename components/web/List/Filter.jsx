/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { omit } from "lodash";
import SelectInput from "components/common/Inputs/SelectInput";
import TextInput from "components/common/Inputs/TextInput";
import MultiSelectInput from "components/common/Inputs/MultiSelectInput";
import Checkbox from "components/common/Inputs/checkbox";



const jobCatData = [
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

const jobTypeData = [
  { value:'1',label:'Wade Cooper'},
  { value:'2',label:'Wade erew'},
  { value:'3',label:'Wade Cowerwroper'}
 ];

export default function FilterComponent() {
  const [filterObj, setFilterObj] = useState({"jobType":[],"jobCategory":{}})

  const handleInputChange = (props) => {
    const data = { ...filterObj }
    data[props.inputName] =props.dataObj;
    setFilterObj(data);
  }
  

  return (
    <div className="sticky top-4 space-y-4">
      <section aria-labelledby="who-to-follow-heading">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flow-root">
              <MultiSelectInput label="Type" data={jobTypeData} value={filterObj.jobType || []} onChange={(e) => handleInputChange({dataObj:e,inputName:'jobType'})}/>
              <SelectInput label="Category" data={jobCatData} value={filterObj.jobCategory || {}} onChange={(e) => handleInputChange({dataObj:e,inputName:'jobCategory'})}/>
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
