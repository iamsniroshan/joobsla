import { DatePickerInput, DoubleSelectInput, TextareaInput, TextInput } from "components/common/Inputs";
import RadioBoxInput from "components/common/Inputs/RadioBoxInpt";
import React, { useState } from "react";



export default function UserInformationFormComponent() {
    const initialFormValue = {
        userInfo: { firstName: "", lastName: "", emailAddress: "", salaryExpectation: "", dateOfBirth: new Date(),gender:"" },
        salary: { salaryExpectation: "", currency: "" }
    };
    const initialError = {
        userInfo: { firstName: "", lastName: "", emailAddress: "", salaryExpectation: "", dateOfBirth: "",gender:"" },
        salary: { salaryExpectation: "", currency: "" }
    }
    const [value, setValue] = useState(initialFormValue)
    const [error, setError] = useState(initialError)


    const handleInputChange = ({ element, inputName, groupNme }) => {
        const data = { ...value };
        if (groupNme) {
            element.target
                ? ((data[groupNme][element.target.name] = element.target.value),
                    formValidator(element.target.value, inputName))
                : ((data[groupNme][inputName] = element),
                    formValidator(element, inputName));
        } else {
            element.target
                ? ((data[element.target.name] = element.target.value),
                    formValidator(element.target.value, inputName))
                : ((data[inputName] = element), formValidator(element, inputName));
        }
        setValue(data);
    };

    const formValidator = (value, inputName) => {
        if (value === "")
            setError({ ...error, [inputName]: "Required filed is missing" });
        else setError({ ...error, [inputName]: "" });
    };

    const handleSubmit = () => {
        console.log(value)
    }

    const childSalarySelectConfig = {
        data: [{ label: 'LKR / Month', value: 'lkr-month' }, { label: 'LKR / Year', value: 'lkr-year' }],
        name: 'currency',
        label: 'Currency'
    }

    async function updateUserInformationHttpCall(postData) {
        const response = await fetch("/api/auth/update-userinfo", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    return (

        <form>
            {/* Divider container */}
            <div className="py-6 space-y-6 sm:py-0 sm:space-y-0 sm:divide-y sm:divide-gray-200">

                {/* First name */}
                <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:px-6 sm:py-5 w-[25rem]">
                    <div className="sm:col-span-2">
                        <TextInput
                            validate={error.userInfo.firstName}
                            type="text"
                            label="First name"
                            required="true"
                            name="firstName"
                            value={value.userInfo.firstName}
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
                            value={value.userInfo.lastName}
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
                            value={value.userInfo.emailAddress}
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
                            value={value.userInfo.dateOfBirth}
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
                            value={value.salary}
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
                            value={value.userInfo.aboutYou}
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
                <fieldset>
                    <div className="space-y-2 px-4 sm:space-y-0 sm:grid sm:items-start sm:px-6 sm:py-5">
                        <div className="space-y-5 sm:col-span-2">
                            <div className="space-y-5 sm:mt-0">
                                <RadioBoxInput
                                    validate={error.userInfo.gender}
                                    type="radio"
                                    label="Gender"
                                    name="gender"
                                    data={[{ value: "male", label: "Male" }, { value: "female", label: "Female" }]}
                                    value={value.userInfo.gender}
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
                            <hr className="border-gray-200" />
                        </div>
                    </div>
                </fieldset>
            </div>

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

    )
}
