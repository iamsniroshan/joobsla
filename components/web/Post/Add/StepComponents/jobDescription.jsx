import React, { useContext, useRef } from 'react'
import { AddPostWizardContext } from 'components/context';
import TextEditInput from 'components/common/Inputs/TextEditorInput';


const JobDescriptionComponent = () => {

    const { postDetails, setPostDetails } = useContext(AddPostWizardContext); // Context API


    const handleInputChange = ({ target: { name = 'desc', value } }) => {
        const data = { ...postDetails }
        data["jobDescription"][name] = value;
        setPostDetails(data);
    }

    // Destructuring object from Context API
    const { jobDescription } = postDetails;



    return (
        <>
            <form>
                <TextEditInput value={jobDescription.desc} onChange={handleInputChange} label="Job Description" placeholder={' Write Your job post...'} required="true" />
            </form>
        </>
    )
}
export default JobDescriptionComponent