import React from "react";
const InitialValues = {
    jobDetail: { jobTitle: "", jobType: "", jobCategory: "" },
    jobDescription: { desc: "" },
    jobSalary: { minAmount: "", maxAmount: "", currency: "LKR" }
  }
  
const AddPostWizardContext = React.createContext(InitialValues);
AddPostWizardContext.displayName = "AddPostWizardContext"

export default AddPostWizardContext;