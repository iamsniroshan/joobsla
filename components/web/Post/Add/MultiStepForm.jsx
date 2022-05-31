import PanelSteps from "components/common/Steps/Panels";
import React, { useState, useContext } from "react";
import { AddPostWizardContext } from 'components/context';
import createJobPostApi from 'services/api/jobPost'


const NavigationButton = ({ goNext, goPrevious, selectedIndex, list, proceedNext }) => {
    const { postDetails } = useContext(AddPostWizardContext); // Context API
    return (
        <>
            <div className="absolute bottom-0 w-full px-0 py-3 bg-gray-50 text-right sm:px-6">
                <div className="container mx-auto max-w-7xl">
                    <button disabled={selectedIndex === 0} onClick={goPrevious} className="mr-2 w-32 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Previous
                    </button>{" "}
                    {selectedIndex !== list.length - 1 && (
                        <button onClick={goNext} className="mr-2 w-32 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            {selectedIndex !== list.length - 1 ? "Next" : "Finish"}
                        </button>
                    )}
                    {selectedIndex === list.length - 1 && (
                        <button onClick={submitData(postDetails)} className="mr-2 w-32 bg-green-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            {'Submit'}
                        </button>
                    )}
                </div>
            </div>
            <div className="block h-20 w-full"></div>
        </>
    )
};

const submitData = (postDetails) => {
    try {
        const result = createJobPostApi(postDetails);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

const ProgressBar = ({ list, selectedIndex }) => {
    const newList = list.map((item, index) => {
        if (index < selectedIndex) {
            item['status'] = "complete"
            return item
        }
        else if (index === selectedIndex) {
            item['status'] = "current"
            return item
        } else {
            item['status'] = "upcoming"
            return item
        }
    })
    return (
        <>
            {list.length > 0 && (<PanelSteps steps={newList} />)}
        </>
    )
}


const MultiStepForm = ({ list, displayProgressBar }) => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const { proceedNext, setProceedNext, postDetails } = useContext(AddPostWizardContext); // Context API

    const goNext = () => {
        if (checkValidation(postDetails, selectedIndex)) { // check step one validation
            selectedIndex !== (list.length - 1) ? setSelectedIndex(selectedIndex + 1) : null
        } else {
            setProceedNext(false)
        }
    };

    const goPrevious = () => {
        if (selectedIndex !== 0)
            setSelectedIndex(selectedIndex - 1);
    };

    const checkValidation = (props, selectedIndex) => {
        let { jobTitle, jobType, jobCategory } = props.jobDetail
        let { desc } = props.jobDescription
        if (selectedIndex === 0) { // step one validation
            return jobTitle && jobType && jobCategory ? true : false
        }
        if (selectedIndex === 1) { // step two validation
            return desc ? true : false
        }

    }

    return (
        <>
            <div className={"wrapper wrapper-content "}>
                <div className="p-0 mt-10">
                    <div className="container mx-auto max-w-7xl">
                        {displayProgressBar && (<ProgressBar list={list} selectedIndex={selectedIndex} />)}
                    </div>
                </div>
                {/*-------------------------------*/}
                <div className="p-0 mt-10">
                    <div className="container mx-auto max-w-7xl">
                        {list[selectedIndex].component}
                    </div>
                </div>
                {/** ---------------- Navigation buttons ---------------- */}
                <NavigationButton
                    goNext={goNext}
                    goPrevious={goPrevious}
                    selectedIndex={selectedIndex}
                    list={list}
                    proceedNext={proceedNext}
                />
            </div>
        </>
    )
}

export default MultiStepForm;