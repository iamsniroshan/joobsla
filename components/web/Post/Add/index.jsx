import React, { useState } from 'react';
import MultiStepForm from './MultiStepForm';
import OrderContext from './OrderContext';
import { JobDetailsComponent, JobDescriptionComponent, OrderConfirmation } from './StepComponents';



// List of components to switch inside the multi-form container
const componentsList = [
  { id: 1, headerText: 'Shipping Address',status:'current', component: <JobDetailsComponent/>},
  { id: 2, headerText: 'Payment Details', status:'upcoming', component: <JobDescriptionComponent /> },
  { id: 3, headerText: 'Order Confirmation', status:'upcoming', component: <OrderConfirmation /> },
];

// Supplying initial state values to use with different components.
const InitialValues = {
  jobDetail: { jobTitle: "", jobType: ""},
  jobDescription: { desc: "" }
}

function PostAddComponent() {

  // State to store checkout details
  // This is used to prevent losing unsaved changes when you switch the component.
  const [postDetails, setPostDetails] = useState(InitialValues);
  const [proceedNext, setProceedNext] = useState(true); // Enable or Disable 'Next' button within each component

  return (
    <div className="xxxxxxxx">
      <OrderContext.Provider value={{ postDetails, setPostDetails, setProceedNext }}>
        <MultiStepForm
          list={componentsList}
          displayProgressBar={true} // Set this to false if you don't want to display the progress bar.
          proceedNext={proceedNext} // Optional props. To Enable/Disable 'Next' button from child component.
        />
      </OrderContext.Provider>

    </div>
  );
}

export default PostAddComponent;
