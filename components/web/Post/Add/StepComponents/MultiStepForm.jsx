import PanelSteps from "components/common/Steps/Panels";
import React, { useState, useContext } from "react";
import { AddPostWizardContext } from 'components/context';
import { useContextualRouting } from "next-use-contextual-routing";
import { useRouter } from 'next/router';
import { addPostSuccessAtom, jobDescriptionErrorAtom } from "atoms-store";
import { useAtom } from "jotai";
import BounceLoader from "components/common/Loader/bounce";
import { createJobPostApi } from "services/api";
import { useQuery } from "react-query";

const NavigationButton = ({ goNext, goPrevious, selectedIndex, list }) => {

    const { postDetails } = useContext(AddPostWizardContext); // Context API
    const { returnHref } = useContextualRouting();
    const [loader, setLoader] = useAtom(addPostSuccessAtom)
    const router = useRouter();
    const { refetch } = useQuery('jobPostUseQuery');

    const submitData = (postDetails) => {
        setLoader(true)
        createJobPostApi(postDetails).then(item => {
            if (item.status === 'success') {
                router.push(returnHref, undefined, { shallow: true })
                refetch()
                setLoader(false)
            } else {
                router.push(returnHref, undefined, { shallow: true })
            }
        });
    }

    return (
        <>
            <div className="absolute bottom-0 w-full px-0 py-3 bg-gray-50 text-right sm:px-6">
                <div className="container mx-auto max-w-7xl">
                    <button disabled={selectedIndex === 0} onClick={goPrevious} className="mr-2 w-32 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Previous
                    </button>{" "}
                    {selectedIndex !== list.length - 1 ? (
                        <button type="submit" onClick={goNext} className="mr-2 w-32 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-0 ">
                            {selectedIndex !== list.length - 1 ? "Next" : "Finish"}
                        </button>
                    ) : (
                        <button type="button" onClick={() => submitData(postDetails)} className="mr-2 w-32 bg-green-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-0">
                            {'Submit'}
                        </button>
                    )}

                </div>
            </div>
            <div className="block h-20 w-full"></div>
        </>
    )
};



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
    const { postDetails } = useContext(AddPostWizardContext); // Context API
    const [loader] = useAtom(addPostSuccessAtom)
    const [error, setError] = useAtom(jobDescriptionErrorAtom);

    const goNext = () => {
        if (checkValidation(postDetails, selectedIndex)) { // check step one validation
            selectedIndex !== (list.length - 1) ? setSelectedIndex(selectedIndex + 1) : null
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
            const errorObj = {
                jobTitle : "",
                jobType: "",
                jobCategory: "",
                desc: ""
            }
            for (var key in props.jobDetail) {
                if(props.jobDetail[key] === '') {
                    errorObj[key] = 'Required filed is missing'
                }
            }
            setError(errorObj)
            return jobTitle && jobType && jobCategory ? true : false
        }
        if (selectedIndex === 1) { // step two validation
            const errorObj = {
                jobTitle : "",
                jobType: "",
                jobCategory: "",
                desc: ""
            }
            for (var key in props.jobDescription) {
                if(props.jobDescription[key] === '') {
                    errorObj[key] = 'Required filed is missing'
                }
            }
            setError(errorObj)
            return desc ? true : false
        }

    }



    return (
        <>
            {loader ? (
                <div className="flex items-center justify-center h-80">
                    <div>
                        <BounceLoader />
                        <p className="text-center mt-4 font-bold">Creating...</p>
                    </div>
                </div>
            ) : (
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
                    />
                </div>
            )}
        </>
    )
}

export default MultiStepForm;