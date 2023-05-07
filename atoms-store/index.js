import { atom, useAtom } from 'jotai'

// Create your atoms and derivatives
export const addPostSuccessAtom = atom(false)
export const jobDescriptionErrorAtom = atom({ jobTitle: "", jobType: "", jobCategory: "", sortDesc: "", longDesc: "" })
// Job List filter store
export const jobsFilterAtom = atom({ "jobType": [], "jobCategory": {}, "skills": [] })
// Job detail obj store
export const jobDetailAtom = atom({
    jobDetail: { jobTitle: "", jobType: "", jobCategory: "", expirationDate: new Date() },
    jobDescription: { longDesc: "", sortDesc: "" },
    jobSalary: { minAmount: "", maxAmount: "", currency: "lkr-month" },
    experience: { number: "", numberTag: "plus-year" },
    workingHours: { hour: "", hourTag: "h-week" }
})

