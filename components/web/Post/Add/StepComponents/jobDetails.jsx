import React, { useContext, useState } from "react";
import { AddPostWizardContext } from "components/context";
import * as myConstClass from "constant";
import {
  TextInput,
  SelectInput,
  CurrencyInput,
} from "components/common/Inputs";
import { useAtom } from 'jotai'
import { jobDescriptionErrorAtom } from "atoms-store";

const JobDetailsComponent = () => {
  const { postDetails, setPostDetails } = useContext(AddPostWizardContext);
  const [error, setError] = useAtom(jobDescriptionErrorAtom); // Context API

  const handleInputChange = ({ element, inputName, groupNme }) => {
    const data = { ...postDetails };
    if (groupNme) {
      element.target
        ? ((data[groupNme][element.target.name] = element.target.value),
          formValidator(element.target.value, inputName))
        : ((data[groupNme][inputName] = element),
          formValidator(element, inputName));
    } else {
      element.target
        ? ((data[element.target.name] = element.target.value),
          formValidator(element.target.value, inputName))
        : ((data[inputName] = element), formValidator(element, inputName));
    }
    setPostDetails(data);
  };

  const formValidator = (value, inputName) => {
    if (value === "")
      setError({ ...error, [inputName]: "Required filed is missing" });
    else setError({ ...error, [inputName]: "" });
  };

  const { jobDetail, jobSalary } = postDetails;

  return (
    <>
      <div className="bg-white py-10">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-3 sm:col-span-1">
            <TextInput
              validate={error.jobTitle}
              type="text"
              label="Job Title"
              required="true"
              name="jobTitle"
              value={jobDetail.jobTitle}
              placeholder=""
              onChange={(e) =>
                handleInputChange({
                  element: e,
                  inputName: "jobTitle",
                  groupNme: "jobDetail",
                })
              }
            />
          </div>

          <div className="col-span-3 sm:col-span-1">
            <SelectInput
              validate={error.jobCategory}
              label="Job Category"
              data={myConstClass.jobCatData}
              value={jobDetail.jobCategory || {}}
              onChange={(e) =>
                handleInputChange({
                  element: e,
                  inputName: "jobCategory",
                  groupNme: "jobDetail",
                })
              }
            />
          </div>

          <div className="col-span-3 sm:col-span-1">
            <SelectInput
            validate={error.jobType}
              label="Job Type"
              data={myConstClass.jobTypeData}
              value={jobDetail.jobType || {}}
              onChange={(e) =>
                handleInputChange({
                  element: e,
                  inputName: "jobType",
                  groupNme: "jobDetail",
                })
              }
            />
          </div>

          {/* <div className="col-span-3 sm:col-span-1">
              <CurrencyInput type="number" label="Min Salary"
                name="minAmount" value={jobSalary} placeholder="00.00" onChange={(e) => handleInputChange({ element: e, inputName: 'minAmount', groupNme:'jobSalary' })} />
            </div>

            <div className="col-span-3 sm:col-span-1">
              <CurrencyInput type="text" label="Max Salary"
                name="maxAmount" value={jobSalary} placeholder="00.00" onChange={(e) => handleInputChange({ element: e, inputName: 'maxAmount' , groupNme:'jobSalary'})} />
            </div> */}
        </div>
      </div>
    </>
  );
};

export default JobDetailsComponent;
