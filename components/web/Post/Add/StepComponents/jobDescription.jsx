import React, { useContext, useRef } from "react";
import { AddPostWizardContext } from "components/context";
import TextEditInput from "components/common/Inputs/TextEditorInput";
import { jobDescriptionErrorAtom } from "atoms-store";
import { useAtom } from "jotai";
import { TextareaInput } from "components/common/Inputs";

const JobDescriptionComponent = () => {
  const { postDetails, setPostDetails } = useContext(AddPostWizardContext); // Context API
  const [error, setError] = useAtom(jobDescriptionErrorAtom); // Context API

  const handleInputChange = ({ element, inputName, groupNme }) => {
    const data = { ...postDetails };
    data[groupNme][inputName] = element.target.value
    setPostDetails(data);
    formValidator(element.target.value, inputName)
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
    <div className="container mx-auto max-w-7xl">
      <form>
        <TextareaInput
          type="text"
          label="Job Sort Description"
          name="sortDesc"
          validate={error.sortDesc}
          value={jobDescription.sortDesc}
          placeholder="Write Your job sort description ..."
          rows={5}
          onChange={(e) =>
            handleInputChange({
              element: e,
              inputName: "sortDesc",
              groupNme: "jobDescription",
            })
          }
        />
        <br></br>
        <TextEditInput
          validate={error.longDesc}
          value={jobDescription.longDesc}
          label="Job Long Description"
          name="longDesc"
          placeholder={" Write Your job post long description..."}
          onChange={(e) =>
            handleInputChange({
              element: e,
              inputName: "longDesc",
              groupNme: "jobDescription",
            })
          }
        />
      </form>
      </div>
    </>
  );
};
export default JobDescriptionComponent;
