import CurrencyInput from 'components/common/Inputs/CurrencyInput';
import TextInput from 'components/common/Inputs/TextInput';
import React, { useContext } from 'react'
import { AddPostWizardContext } from 'components/context';


const JobDetailsComponent = () => {

  const { postDetails, setPostDetails } = useContext(AddPostWizardContext); // Context API

  const handleInputChange = ({ target: { name, value } }) => {
    const data = { ...postDetails }
    data["jobDetail"][name] = value;
    setPostDetails(data);
  }

  const handleSalaryInputChange = ({ target: { name, value } }) => {
    const data = { ...postDetails }
    data["jobSalary"][name] = value;
    setPostDetails(data);
  }

  // Destructuring object from Context API
  const { jobDetail, jobSalary } = postDetails;

  return (
    <>
      <form>
        <div className="bg-white py-10">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-1">
              <TextInput type="text" label="Job Title" required="true"
                name="jobTitle" value={jobDetail.jobTitle} placeholder="" onChange={handleInputChange} />
            </div>

            <div className="col-span-3 sm:col-span-1">
              <TextInput type="text" label="Job Type" required="true"
                name="jobType" value={jobDetail.jobType} placeholder="" onChange={handleInputChange} />
            </div>

            <div className="col-span-3 sm:col-span-1">
              <TextInput type="text" label="Job Category" required="true"
                name="jobCategory" value={jobDetail.jobCategory} placeholder="" onChange={handleInputChange} />
            </div>

            <div className="col-span-3 sm:col-span-1">
              <CurrencyInput type="text" label="Min Salary"
                name="minAmount" value={jobSalary} placeholder="00.00" onChange={handleSalaryInputChange} />
            </div>

            <div className="col-span-3 sm:col-span-1">
              <CurrencyInput type="text" label="Max Salary"
                name="maxAmount" value={jobSalary} placeholder="00.00" onChange={handleSalaryInputChange} />
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default JobDetailsComponent
