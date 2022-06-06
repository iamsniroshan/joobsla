import { AddPostWizardContext } from 'components/context';
import React, { useState } from 'react';
import MultiStepForm from './StepComponents/MultiStepForm';
import { JobDetailsComponent, JobDescriptionComponent, JobPreviewComponent } from './StepComponents';
import { AddPostWizardContextInitialValues } from 'components/context/AddPostWizardContext';


// List of components to switch inside the multi-form container
const componentsList = [
  { id: 1, headerText: 'Job Detail', status: 'current', component: <JobDetailsComponent /> },
  { id: 2, headerText: 'Job Description', status: 'upcoming', component: <JobDescriptionComponent /> },
  { id: 3, headerText: 'Preview', status: 'upcoming', component: <JobPreviewComponent /> },
];


function PostAddComponent() {

  // State to store checkout details
  // This is used to prevent losing unsaved changes when you switch the component.
  const [postDetails, setPostDetails] = useState(AddPostWizardContextInitialValues);


  return (
    <div className="xxxxxxxx">
      <AddPostWizardContext.Provider value={{ postDetails, setPostDetails }}>
        <MultiStepForm
          list={componentsList}
          displayProgressBar={true} // Set this to false if you don't want to display the progress bar.
        />
      </AddPostWizardContext.Provider>
    </div>
  );
}

export default PostAddComponent;
