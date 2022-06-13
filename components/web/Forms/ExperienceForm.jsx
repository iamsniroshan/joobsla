import { TextInput } from "components/common/Inputs";
import { useContextualRouting } from "next-use-contextual-routing";
import { useRouter } from "next/router";
import React, { useState } from "react";






export default function ExperienceFormComponent() {
    const initialFormValue = {
        experience: []
    };


    const [formData, setFormData] = useState(initialFormValue)

    const router = useRouter();
    const { returnHref } = useContextualRouting();


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
        // updateUserInfoApi(formData).then(item => {
        //     if (item.status === 'success') {
        //         // refetch().then(e =>{ 
        //         //     setLoader(false)
        //         //     router.push(returnHref, undefined, { shallow: true })
        //         // })
        //         router.push(returnHref, undefined, { shallow: true })
        //     } else {
        //         router.push(returnHref, undefined, { shallow: true })
        //     }
        // });
    }




    return (
        <>
            <form>
                {/* Divider container */}
                <div className="py-6 space-y-6 sm:py-0 sm:space-y-0">
                    {/* First name */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:px-6 sm:py-5 w-[25rem]">
                        <div className="sm:col-span-2">
                            <TextInput
                                type="text"
                                label="First name"
                                required="true"
                                name="firstName"
                                value={formData?.comName}
                                placeholder=""
                                onChange={(e) =>
                                    handleInputChange({
                                        element: e,
                                        inputName: "firstName",
                                        groupNme: "userInfo",
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
