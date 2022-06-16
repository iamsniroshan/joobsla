import { DatePickerInput, SelectInput, TextareaInput, TextInput } from "components/common/Inputs";
import { useContextualRouting } from "next-use-contextual-routing";
import { useRouter } from "next/router";
import React, { useState } from "react";
import * as myConstClass from "constant";
import { updateUserInfoApi } from "services/api";
import { useQuery } from "react-query";





export default function ExperienceFormComponent() {
    const initialFormValue = {
        experience: { companyName: "", title: "", employmentType: {}, location: {}, startDate: "", endDate: "", description: "" }
    };

    const initialError = {
        experience: { companyName: "", title: "", employmentType: "" }
    };


    const [formData, setFormData] = useState(initialFormValue)
    const [error, setError] = useState(initialError)

    const router = useRouter();
    const { returnHref } = useContextualRouting();

    const { refetch } = useQuery('userInfoUseQuery');


    const handleInputChange = ({ element, inputName, groupNme }) => {
        const fData = { ...formData };
        if (groupNme) {
            element.target
                ? ((fData[groupNme][element.target.name] = element.target.value),
                    formValidator(element.target.value, inputName))
                : ((fData[groupNme][inputName] = element),
                    formValidator(element, inputName));
        } else {
            element.target
                ? ((fData[element.target.name] = element.target.value),
                    formValidator(element.target.value, inputName))
                : ((fData[inputName] = element), formValidator(element, inputName));
        }
        setFormData(fData);
    };

    const formValidator = (value, inputName) => {
        if (value === "")
            setError({ ...error, [inputName]: "Required filed is missing" });
        else setError({ ...error, [inputName]: "" });
    };



    const handleSubmit = () => {
        //setLoader(true)
        refetch().then(element =>{ 
            console.log(element.data.data[0].experience)
            const generatedData = {experience:[...element.data.data[0].experience,{...formData.experience}]}
            updateUserInfoApi(generatedData).then(item => {
                if (item.status === 'success') {
                    refetch().then(element => console.log('refetch is done'))
                    router.push(returnHref, undefined, { shallow: true })
                } else {
                    router.push(returnHref, undefined, { shallow: true })
                }
            });
        })
    }




    return (
        <>
            <form>
                {/* Divider container */}
                <div className="py-6 space-y-6 sm:py-0 sm:space-y-0">
                    {/* Company  name */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:px-6 sm:py-5 w-[25rem]">
                        <div className="sm:col-span-2">
                            <TextInput
                                type="text"
                                label="Company name"
                                required="true"
                                name="companyName"
                                value={formData?.experience.companyName}
                                placeholder=""
                                onChange={(e) =>
                                    handleInputChange({
                                        element: e,
                                        inputName: "companyName",
                                        groupNme: "experience",
                                    })
                                }
                            />
                        </div>
                    </div>

                    {/* Title */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:px-6 sm:py-5 w-[25rem]">
                        <div className="sm:col-span-2">
                            <TextInput
                                type="text"
                                label="Title"
                                required="true"
                                name="title"
                                value={formData?.experience.title}
                                placeholder=""
                                onChange={(e) =>
                                    handleInputChange({
                                        element: e,
                                        inputName: "title",
                                        groupNme: "experience",
                                    })
                                }
                            />
                        </div>
                    </div>

                    {/* Employment Type */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:px-6 sm:py-5 w-[25rem]">
                        <div className="sm:col-span-2">
                            <SelectInput
                                label="Employment Type"
                                data={myConstClass.jobTypeData}
                                value={formData?.experience.employmentType || {}}
                                onChange={(e) =>
                                    handleInputChange({
                                        element: e,
                                        inputName: "employmentType",
                                        groupNme: "experience",
                                    })
                                }
                            />
                        </div>
                    </div>

                    {/* Location */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:px-6 sm:py-5 w-[25rem]">
                        <div className="sm:col-span-2">
                            <SelectInput
                                label="Location"
                                data={myConstClass.location}
                                value={formData?.experience.location || {}}
                                onChange={(e) =>
                                    handleInputChange({
                                        element: e,
                                        inputName: "location",
                                        groupNme: "experience",
                                    })
                                }
                            />
                        </div>
                    </div>

                    {/* Start date */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:px-6 sm:py-5 w-[25rem]">
                        <div className="sm:col-span-2">
                            <DatePickerInput
                                label="Start date"
                                value={formData?.experience.startDate}
                                onChange={(e) =>
                                    handleInputChange({
                                        element: e,
                                        inputName: "startDate",
                                        groupNme: "experience",
                                    })
                                }
                            />
                        </div>
                    </div>

                    {/* End date */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:px-6 sm:py-5 w-[25rem]">
                        <div className="sm:col-span-2">
                            <DatePickerInput
                                label="End date"
                                value={formData?.experience.endDate}
                                onChange={(e) =>
                                    handleInputChange({
                                        element: e,
                                        inputName: "endDate",
                                        groupNme: "experience",
                                    })
                                }
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:px-6 sm:py-5 w-[25rem]">
                        <div className="sm:col-span-2">
                            <TextareaInput
                                type="text"
                                label="Description"
                                name="description"
                                value={formData?.experience.description}
                                placeholder="Tell us yourself"
                                rows={10}
                                onChange={(e) =>
                                    handleInputChange({
                                        element: e,
                                        inputName: "description",
                                        groupNme: "experience",
                                    })
                                }
                            />
                        </div>
                    </div>





                </div>
                {/* {JSON.stringify(formData)} */}

                {/* Action buttons */}
                <div className="flex-shrink-0 px-4 border-t border-gray-200 py-5 sm:px-6">
                    <div className="space-x-3 flex justify-end">
                        <button
                            type="button"
                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            type="button"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Update
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
