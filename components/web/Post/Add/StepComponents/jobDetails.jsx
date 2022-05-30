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

  // Destructuring object from Context API
  const { jobDetail } = postDetails;

  return (
    <>
      <form>
        <div className="bg-white py-10">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-1">
              <TextInput type="text" label="Job Title"
                name="jobTitle" value={jobDetail.jobTitle} placeholder="Job title" onChange={handleInputChange} />
            </div>


            <div className="col-span-3 sm:col-span-1">
              <TextInput type="text" label="Job Type"
                name="jobType" value={jobDetail.jobType} placeholder="Job type" onChange={handleInputChange} />
            </div>

            <div className="col-span-3 sm:col-span-1">
              <TextInput type="text" label="jobCategory"
                name="jobCategory" value={jobDetail.jobCategory} placeholder="Job Category" onChange={handleInputChange} />
            </div>

          </div>
        </div>
      </form>
    </>
  )
}

export default JobDetailsComponent
