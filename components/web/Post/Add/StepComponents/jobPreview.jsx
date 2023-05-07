import React, {useContext} from 'react'
import { AddPostWizardContext } from 'components/context';
import PostViewComponent from '../../View';

const JobPreviewComponent = () => {
    const { postDetails } = useContext(AddPostWizardContext);
    return (
        <>
                <PostViewComponent jobDetailObj={postDetails} postId={''}/>
        </>
    )
}
export default JobPreviewComponent