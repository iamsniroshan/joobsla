import React from "react";
export const AddPostWizardContextInitialValues = {
    jobDetail: { jobTitle: "", jobType: "", jobCategory: "", expirationDate: new Date() },
    jobDescription: { longDesc: "",sortDesc:"" },
    jobSalary: { minAmount: "", maxAmount: "", currency: "lkr-month" },
    experience: { number: "", numberTag: "plus-year" },
    workingHours: {hour: "", hourTag:"h-week"}
  }
  
const AddPostWizardContext = React.createContext(AddPostWizardContextInitialValues);
AddPostWizardContext.displayName = "AddPostWizardContext"

export default AddPostWizardContext;