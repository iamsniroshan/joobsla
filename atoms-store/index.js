import { atom, useAtom } from 'jotai'

// Create your atoms and derivatives
export const addPostSuccessAtom = atom(false)
export const jobDescriptionErrorAtom = atom({ jobTitle: "", jobType: "", jobCategory: "", sortDesc: "", longDesc: "" })
// Job List filter store
export const jobsFilterAtom = atom({ "jobType": [], "jobCategory": {}, "skills": [] })


