import { AddPostWizardContext } from 'components/context';
import React, { useEffect, useState } from 'react';
import MultiStepForm from './StepComponents/MultiStepForm';
import { JobDetailsComponent, JobDescriptionComponent, JobPreviewComponent } from './StepComponents';
import { AddPostWizardContextInitialValues } from 'components/context/AddPostWizardContext';
import { useRouter } from 'next/router'
import { getJobPostByIdApi } from 'services/api/jobPostApi';
import { useQuery } from '@tanstack/react-query';

// List of components to switch inside the multi-form container
const componentsList = [
  { id: 1, headerText: 'Job Detail', status: 'current', component: <JobDetailsComponent /> },
  { id: 2, headerText: 'Job Description', status: 'upcoming', component: <JobDescriptionComponent /> },
  { id: 3, headerText: 'Preview', status: 'upcoming', component: <JobPreviewComponent /> },
];


function PostAddComponent() {

  const [postDetails, setPostDetails] = useState(AddPostWizardContextInitialValues);
  const router = useRouter();
  const { viewType , jobId } = router.query;

  const { isLoading, error, data } = useQuery({
    queryKey: ["jobPostByIdQuery", { openPostAddModal: true}],
    queryFn: () => getJobPostByIdApi(jobId),
  });

  // reset post wizard
  useEffect(() => {
    if (viewType === 'create') {
      setPostDetails({
        jobDetail: { jobTitle: "", jobType: "", jobCategory: "", expirationDate: new Date() },
        jobDescription: { longDesc: "", sortDesc: "" },
        jobSalary: { minAmount: "", maxAmount: "", currency: "lkr-month" },
        experience: { number: "", numberTag: "plus-year" },
        workingHours: { hour: "", hourTag: "h-week" }
      });
    }
  }, [viewType])

  useEffect(() => {
    if (viewType === 'edit' && !isLoading) {
      setPostDetails(data.data[0]);
    }
  }, [viewType,isLoading])


  return (
    <div className="add-post-wizard">
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
