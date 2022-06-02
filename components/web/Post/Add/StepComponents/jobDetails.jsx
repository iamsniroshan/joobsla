import React, { useContext } from 'react'
import { AddPostWizardContext } from 'components/context';
import * as myConstClass from 'constant';
import { TextInput, SelectInput,CurrencyInput } from 'components/common/Inputs';

const JobDetailsComponent = () => {

  const { postDetails, setPostDetails } = useContext(AddPostWizardContext); // Context API

  const handleInputChange = ({ element, inputName, groupNme }) => {
    const data = { ...postDetails }
    if(groupNme) {
      element.target ?  data[groupNme][inputName] = element.target.value : data[groupNme][inputName] = element
    } else {
      element.target ?  data[inputName] = element.target.value : data[inputName] = element
    }
    setPostDetails(data);
  }

  const { jobDetail, jobSalary } = postDetails;

  return (
    <>
      <form>
        <div className="bg-white py-10">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-1">
              <TextInput type="text" label="Job Title" required="true"
                name="jobTitle" value={jobDetail.jobTitle} placeholder="" onChange={(e) => handleInputChange({ element: e, inputName: 'jobTitle', groupNme:'jobDetail' })} />
            </div>

            <div className="col-span-3 sm:col-span-1">
              <SelectInput label="Job Category" data={myConstClass.jobCatData} value={jobDetail.jobCategory || {}} onChange={(e) => handleInputChange({ element: e, inputName: 'jobCategory', groupNme:'jobDetail' })} />
            </div>

            <div className="col-span-3 sm:col-span-1">
              <SelectInput label="Job Type" data={myConstClass.jobTypeData} value={jobDetail.jobType || {}} onChange={(e) => handleInputChange({ element: e, inputName: 'jobType', groupNme:'jobDetail' })} />
            </div>

            <div className="col-span-3 sm:col-span-1">
              <CurrencyInput type="number" label="Min Salary"
                name="minAmount" value={jobSalary} placeholder="00.00" onChange={(e) => handleInputChange({ element: e, inputName: 'minAmount', groupNme:'jobSalary' })} />
            </div>

            <div className="col-span-3 sm:col-span-1">
              <CurrencyInput type="text" label="Max Salary"
                name="maxAmount" value={jobSalary} placeholder="00.00" onChange={(e) => handleInputChange({ element: e, inputName: 'maxAmount' , groupNme:'jobSalary'})} />
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default JobDetailsComponent
