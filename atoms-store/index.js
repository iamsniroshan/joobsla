import { atom, useAtom } from 'jotai'

// Create your atoms and derivatives
export const addPostSuccessAtom = atom(false)

export const jobDescriptionErrorAtom = atom({ jobTitle: "", jobType: "", jobCategory: "", desc:"" })



//const [toggleStatus] = useAtom(togglePostSuccessAtom)
//const handleChange = (e) => setText(e.target.value)