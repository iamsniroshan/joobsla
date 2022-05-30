import CurrencyInput from 'components/common/Inputs/CurrencyInput';
import TextInput from 'components/common/Inputs/TextInput';
import React, { useContext } from 'react'
import OrderContext from '../OrderContext';


const JobDetailsComponent = () => {

  const { postDetails, setPostDetails } = useContext(OrderContext); // Context API

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
              <TextInput type="text" label="Job Title"
                name="jobTitle" value={jobDetail.jobTitle} placeholder="" onChange={handleInputChange} />
            </div>

            <div className="col-span-3 sm:col-span-1">
              <TextInput type="text" label="Job Type"
                name="jobType" value={jobDetail.jobType} placeholder="" onChange={handleInputChange} />
            </div>

            <div className="col-span-3 sm:col-span-1">
              <TextInput type="text" label="Job Category"
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
