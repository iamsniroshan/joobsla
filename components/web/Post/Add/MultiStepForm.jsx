import PanelSteps from "components/common/Steps/Panels";
import React, { useState } from "react";


const NavigationButton = ({ goNext, goPrevious, selectedIndex, list, proceedNext }) => (
    <>
        <div className="px-0 py-3 bg-gray-50 text-right sm:px-6">
            <div className="container mx-auto max-w-7xl">
                <button disabled={selectedIndex === 0} onClick={goPrevious} className="mr-2 w-32 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Previous
                </button>{" "}
                {selectedIndex !== list.length - 1 && (
                    <button onClick={goNext} disabled={!proceedNext} className="mr-2 w-32 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        {selectedIndex !== list.length - 1 ? "Next" : "Finish"}
                    </button>
                )}
            </div>
        </div>
    </>
);

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


const MultiStepForm = ({ list, displayProgressBar, proceedNext = true }) => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const goNext = () => {
        if (selectedIndex !== list.length - 1)
            setSelectedIndex(selectedIndex + 1);
    };

    const goPrevious = () => {
        if (selectedIndex !== 0)
            setSelectedIndex(selectedIndex - 1);
    };

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