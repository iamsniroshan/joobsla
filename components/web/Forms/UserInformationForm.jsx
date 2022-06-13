import { DatePickerInput, DoubleSelectInput, FileUploadInput, ImageUploadInput, TextareaInput, TextInput } from "components/common/Inputs";
import RadioBoxInput from "components/common/Inputs/RadioBoxInpt";
import { useContextualRouting } from "next-use-contextual-routing";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getUserInfoApi, updateUserInfoApi } from "services/api";





export default function UserInformationFormComponent() {
    const initialFormValue = {
        userInfo: { firstName: "", lastName: "", emailAddress: "", salaryExpectation: "", dateOfBirth: new Date(), gender: "" },
        salary: { salaryExpectation: "", currency: "lkr-month" },
        profile: { imgUrl: "", imgName: "" },
        cv: { fileUrl: "", fileName: "" }
    };
    const initialError = {
        userInfo: { firstName: "", lastName: "", emailAddress: "", salaryExpectation: "", dateOfBirth: "", gender: "" },
        salary: { salaryExpectation: "", currency: "" }
    }

    const [formData, setFormData] = useState(initialFormValue)
    const [error, setError] = useState(initialError)
    const router = useRouter();
    const { returnHref } = useContextualRouting();
    const { isLoading } = useQuery('userInfoUseQuery', () => getUserInfoApi(), {
        onSuccess: (data) => setFormData(data.data[0])
    });

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
        updateUserInfoApi(formData).then(item => {
            if (item.status === 'success') {
                // refetch().then(e =>{ 
                //     setLoader(false)
                //     router.push(returnHref, undefined, { shallow: true })
                // })
                router.push(returnHref, undefined, { shallow: true })
            } else {
                router.push(returnHref, undefined, { shallow: true })
            }
        });
    }

    const childSalarySelectConfig = {
        data: [{ label: 'LKR / Month', value: 'lkr-month' }, { label: 'LKR / Year', value: 'lkr-year' }],
        name: 'currency',
        label: 'Currency'
    }


    return (
        <>
            <form>
                {/* Divider container */}
                <div className="py-6 space-y-6 sm:py-0 sm:space-y-0">
                    {/* Profile image upload */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:px-6 sm:py-5 w-[25rem]">
                        <div className="sm:col-span-2">
                            <ImageUploadInput
                                type="file"
                                value={formData?.profile}
                                label="Upload your profile image"
                                name="profile"
                                onChange={(e) =>
                                    handleInputChange({
                                        element: e,
                                        inputName: "profile",
                                        groupNme: "",
                                    })
                                } />
                        </div>
                    </div>
                    {/* First name */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:px-6 sm:py-5 w-[25rem]">
                        <div className="sm:col-span-2">
                            <TextInput
                                validate={error.userInfo.firstName}
                                type="text"
                                label="First name"
                                required="true"
                                name="firstName"
                                value={formData?.userInfo.firstName}
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
                    {/* Last name */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:px-6 sm:py-5">
                        <div className="sm:col-span-2">
                            <TextInput
                                validate={error.userInfo.lastName}
                                type="text"
                                label="Last Name"
                                required="true"
                                name="lastName"
                                value={formData?.userInfo.lastName}
                                placeholder=""
                                onChange={(e) =>
                                    handleInputChange({
                                        element: e,
                                        inputName: "lastName",
                                        groupNme: "userInfo",
                                    })
                                }
                            />
                        </div>
                    </div>
                    {/* Email address */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:px-6 sm:py-5">
                        <div className="sm:col-span-2">
                            <TextInput
                                validate={error.userInfo.emailAddress}
                                type="text"
                                label="Email address"
                                required="true"
                                name="emailAddress"
                                value={formData?.userInfo.emailAddress}
                                placeholder=""
                                onChange={(e) =>
                                    handleInputChange({
                                        element: e,
                                        inputName: "emailAddress",
                                        groupNme: "userInfo",
                                    })
                                }
                            />
                        </div>
                    </div>
                    {/* Date of birth */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:px-6 sm:py-5">
                        <div className="sm:col-span-2">
                            <DatePickerInput
                                label="Date of birth"
                                value={formData?.userInfo.dateOfBirth}
                                onChange={(e) =>
                                    handleInputChange({
                                        element: e,
                                        inputName: "dateOfBirth",
                                        groupNme: "userInfo",
                                    })
                                }
                            />
                        </div>
                    </div>
                    {/* Salary expectation */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:px-6 sm:py-5">
                        <div className="sm:col-span-2">
                            <DoubleSelectInput
                                type="number"
                                label="Salary expectation"
                                name="salaryExpectation"
                                value={formData?.salary}
                                placeholder="00.00"
                                childSelect={childSalarySelectConfig}
                                onChange={(e) =>
                                    handleInputChange({
                                        element: e,
                                        inputName: "salaryExpectation",
                                        groupNme: "salary",
                                    })
                                }
                            />
                        </div>
                    </div>
                    {/* About you */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:px-6 sm:py-5">
                        <div className="sm:col-span-2">
                            <TextareaInput
                                validate={error.userInfo.aboutYou}
                                type="text"
                                label="About you"
                                required="true"
                                name="aboutYou"
                                value={formData?.userInfo.aboutYou}
                                placeholder="Tell us yourself"
                                rows={3}
                                onChange={(e) =>
                                    handleInputChange({
                                        element: e,
                                        inputName: "aboutYou",
                                        groupNme: "userInfo",
                                    })
                                }
                            />
                        </div>
                    </div>
                    {/* Gender */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:px-6 sm:py-5">
                        <div className="sm:col-span-2">
                            <RadioBoxInput
                                validate={error.userInfo.gender}
                                type="radio"
                                label="Gender"
                                name="gender"
                                data={[{ value: "Male", label: "Male" }, { value: "Female", label: "Female" }]}
                                value={formData?.userInfo.gender}
                                placeholder=""
                                onChange={(e) =>
                                    handleInputChange({
                                        element: e,
                                        inputName: "gender",
                                        groupNme: "userInfo",
                                    })
                                }
                            />
                        </div>
                    </div>
                    {/* File Upload */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:px-6 sm:py-5 w-[25rem]">
                        <div className="sm:col-span-2">
                            <FileUploadInput
                                type="file"
                                label="Attache your CV"
                                name="cv"
                                value={formData?.cv}
                                onChange={(e) =>
                                    handleInputChange({
                                        element: e,
                                        inputName: "cv",
                                        groupNme: "",
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
