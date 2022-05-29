import React, { useState } from "react";


const NavigationButton = ({ goNext, goPrevious, selectedIndex, list, proceedNext }) => (
    <>
        <div className="navigateBtn">
            <button disabled={selectedIndex === 0} onClick={goPrevious} className="btn btn-primary">
                Previous
            </button>{" "}
            {selectedIndex !== list.length - 1 && (
                <button onClick={goNext} disabled={!proceedNext} className="btn btn-primary">
                    {selectedIndex !== list.length - 1 ? "Next" : "Finish"}
                </button>
            )}
        </div>
    </>
);

const ProgressBar = ({ list, selectedIndex }) => {
        <div className="row">
            <div className="container">
                <div className="l-wizard-h">
                    <ul className="wizard-h">
                        {list.map((item, index) => {

                            let progressStatus = "";

                            if (index < selectedIndex)
                                progressStatus = "--previous"
                            else if (index === selectedIndex)
                                progressStatus = "--current"

                            return (
                                <li key={index} className={"l-wizard-h-step wizard-h__step" + progressStatus}>
                                    <i className={item.headerIcon}></i>
                                    <span><span>{index + 1}</span></span>{" "}{item.headerText}
                                </li>
                            )
                        })

                        }
                    </ul>
                </div>
            </div>
        </div>
}

function MultiStepForm({ list, displayProgressBar, proceedNext = true }) {

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
                <br />
                <div className="row">
                    <div className="col-lg-3">
                    </div>
                </div>

                {displayProgressBar && (<ProgressBar list={list} selectedIndex={selectedIndex} />)}

                {/*-------------------------------*/}
                <div className="row form-container">
                    <div className="col-lg-12">{list[selectedIndex].component}</div>
                </div>
                {/*-------------------------------*/}
                <div className="row">
                    <div className="col-lg-12">

                        {/** ---------------- Navigation buttons ---------------- */}
                        <div className="modal-footer">
                            <div className="col-lg-6">
                                <NavigationButton
                                    goNext={goNext}
                                    goPrevious={goPrevious}
                                    selectedIndex={selectedIndex}
                                    list={list}
                                    proceedNext={proceedNext}
                                />
                            </div>
                        </div>
                    </div>
                    {/** ---------------------------------------------------- */}
                </div>
            </div>
        </>
    )
}

export default MultiStepForm;