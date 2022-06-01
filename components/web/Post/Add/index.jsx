import { AddPostWizardContext } from 'components/context';
import React, { useState } from 'react';
import MultiStepForm from './MultiStepForm';
import { JobDetailsComponent, JobDescriptionComponent, OrderConfirmation } from './StepComponents';



// List of components to switch inside the multi-form container
const componentsList = [
  { id: 1, headerText: 'Job Detail', status: 'current', component: <JobDetailsComponent /> },
  { id: 2, headerText: 'Job Description', status: 'upcoming', component: <JobDescriptionComponent /> },
  { id: 3, headerText: 'Preview', status: 'upcoming', component: <OrderConfirmation /> },
];

// Supplying initial state values to use with different components.
const InitialValues = {
  jobDetail: { jobTitle: "", jobType: "", jobCategory: "" },
  jobDescription: { desc: "" },
  jobSalary: { minAmount: "", maxAmount: "", currency: "LKR" }
}

function PostAddComponent() {

  // State to store checkout details
  // This is used to prevent losing unsaved changes when you switch the component.
  const [postDetails, setPostDetails] = useState(InitialValues);
  const [proceedNext, setProceedNext] = useState(true); // Enable or Disable 'Next' button within each component

  return (
    <div className="xxxxxxxx">
      <AddPostWizardContext.Provider value={{ postDetails, setPostDetails, proceedNext, setProceedNext }}>
        <MultiStepForm
          list={componentsList}
          displayProgressBar={true} // Set this to false if you don't want to display the progress bar.
        />
      </AddPostWizardContext.Provider>
    </div>
  );
}

export default PostAddComponent;
