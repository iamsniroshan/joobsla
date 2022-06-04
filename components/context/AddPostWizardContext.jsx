import React from "react";
const InitialValues = {
    jobDetail: { jobTitle: "", jobType: "", jobCategory: "" },
    jobDescription: { desc: "" },
    jobSalary: { minAmount: "", maxAmount: "", currency: "lkr-month" },
    experience: { number: "", numberTag: "plus-year" },
    workingHours: {hour: "", hourTag:"h-week"}
  }
  
const AddPostWizardContext = React.createContext(InitialValues);
AddPostWizardContext.displayName = "AddPostWizardContext"

export default AddPostWizardContext;