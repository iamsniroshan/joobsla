/* This example requires Tailwind CSS v2.0+ */
import Checkbox from "components/common/Inputs/checkbox";
import * as constData from 'constant';
import { SelectInput, MultiSelectInput } from "components/common/Inputs";
import { useAtom } from "jotai";
import { jobsFilterAtom } from "atoms-store";






const FilterComponent = () => {
  const [filterObj, setFilterObj] = useAtom(jobsFilterAtom)

  const handleInputChange = ({ element, inputName, groupNme }) => {
    const data = { ...filterObj }
    // this code for isClearable icon related code
    if (element === null) {
      data[inputName] = {}
      setFilterObj(data);
      return
    }

    if (groupNme) {
      element.target ? data[groupNme][element.target.name] = element.target.value : data[groupNme][inputName] = element
    } else {
      element.target ? data[element.target.name] = element.target.value : data[inputName] = element
    }
    setFilterObj(data);
  }

  const checkBoxOptions = [
    { value: "full-time", label: "Full-time" },
    { value: "part-time", label: "Part-time" },
    { value: "freelance", label: "Freelance" },
    { value: "contract", label: "Contract" },
    { value: "internship", label: "Internship" }
  ];


  return (
    <div className="sticky top-4 space-y-4">
      <section aria-labelledby="who-to-follow-heading">
        <div className="bg-white rounded-lg">
          <div className="p-6 mt-4">
            <div className="flow-root">

              {/* <div className="pb-5">
              <MultiSelectInput label="Skills" 
              data={constData.skillsData}
                value={filterObj.skills || []} isMultiple="true"
                onChange={(e) => handleInputChange({ element: e, inputName: 'skills', groupNme: '' })} 
                />
              </div> */}

              <SelectInput label="Job Category"
                data={constData.jobCatData}
                value={filterObj.jobCategory || { value: '', label: '' }} isMultiple="true" isClearable={true}
                onChange={(e) => handleInputChange({ element: e, inputName: 'jobCategory', groupNme: '' })}
              />

              {/* <Select placeholder="Type"
                value={filterObj.jobType || []} isMultiple={false} isClearable={false}
                onChange={(e) => handleInputChange({ element: e, inputName: 'jobType' })}
                options={dataConst.jobTypeData}
              />
              <Select placeholder="Job Category"
                value={filterObj.jobCategory || {}} isClearable='false'
                onChange={(e) => handleInputChange({ element: e, inputName: 'jobCategory', groupNme: '' })}
                options={dataConst.jobCatData}
              /> */}


              {/* <MultiSelectInput label="Type" data={constData.jobTypeData} value={filterObj.jobType || []} onChange={(e) => handleInputChange({element:e,inputName:'jobType'})}/> */}
              {/* <SelectInput label="Job Category" data={constData.jobCatData} value={filterObj.jobCategory || {}} onChange={(e) => handleInputChange({ element: e, inputName: 'jobCategory', groupNme:'' })} />
              <SelectInput label="Job Type" data={constData.jobTypeData} value={filterObj.jobType || {}} onChange={(e) => handleInputChange({ element: e, inputName: 'jobType', groupNme:'' })} /> */}
              {/* <TextInput type="text" label="Job Type"
                name="jobType"/>
              <Checkbox/> */}
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="trending-heading">
        <div className="bg-white rounded-lg">
          <div className="p-6">
            <div className="flow-root">
              <Checkbox
                value={filterObj.jobType || []}
                onChange={(e) => handleInputChange({ element: e, inputName: 'jobType', groupNme: '' })}
                options={checkBoxOptions} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FilterComponent;
