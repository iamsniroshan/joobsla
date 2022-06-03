import React, { useContext, useRef } from "react";
import { AddPostWizardContext } from "components/context";
import TextEditInput from "components/common/Inputs/TextEditorInput";
import { jobDescriptionErrorAtom } from "atoms-store";
import { useAtom } from "jotai";

const JobDescriptionComponent = () => {
  const { postDetails, setPostDetails } = useContext(AddPostWizardContext); // Context API
  const [error, setError] = useAtom(jobDescriptionErrorAtom); // Context API

  const handleInputChange = ({ element, inputName, groupNme }) => {
    const data = { ...postDetails };
    data[groupNme][inputName] = element.target.value
    setPostDetails(data);
    formValidator(element.target.value,inputName)
  };

  const formValidator = (value, inputName) => {
    if (value === "")
      setError({ ...error, [inputName]: "Required filed is missing" });
    else setError({ ...error, [inputName]: "" });
  };

  // Destructuring object from Context API
  const { jobDescription } = postDetails;

  return (
    <>
    {JSON.stringify(error)}
      <form>
        <TextEditInput
          validate={error.desc}
          value={jobDescription.desc}
          label="Job Description"
          name="desc"
          placeholder={" Write Your job post..."}
          onChange={(e) =>
            handleInputChange({
              element: e,
              inputName: "desc",
              groupNme: "jobDescription",
            })
          }
        />
      </form>
    </>
  );
};
export default JobDescriptionComponent;
