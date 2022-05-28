import { LinkIcon, PlusIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid'
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


export default function UserInformationFormComponent() {
    const schema = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        emailAddress: yup.string().required(),
        salaryExpectation: yup.number().positive().integer(),
        dateOfBirth: yup.string().required(),
        aboutYou: yup.string(),
        gender: yup.string().required()
    });
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  ;

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
        
            <form onSubmit={handleSubmit(updateUserInformationHttpCall)}>
                {/* Divider container */}
                <div className="py-6 space-y-6 sm:py-0 sm:space-y-0 sm:divide-y sm:divide-gray-200">

                    {/* First name */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="project-name"
                                className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                                First name
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                {...register("firstName")}
                                type="text"
                                name="firstName"
                                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    {/* Last name */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="project-name"
                                className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                                Last name
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                {...register("lastName")}
                                type="text"
                                name="lastName"
                                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    {/* Email address */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="project-name"
                                className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                                Email address
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                {...register("emailAddress")}
                                type="text"
                                name="emailAddress"
                                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    {/* Salary expectation */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="project-name"
                                className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                                Salary expectation
                            </label>
                        </div>
                        <div className="sm:col-span-2">

                            <input
                                {...register("salaryExpectation")}
                                type="text"
                                name="salaryExpectation"
                                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    {/* Date of birth */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="project-name"
                                className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >

                                Date of birth
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                {...register("dateOfBirth")}
                                type="text"
                                name="dateOfBirth"
                                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    {/* About you */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="project-description"
                                className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                                About you
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <textarea
                                {...register("aboutYou")}
                                name="aboutYou"
                                rows={3}
                                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                                defaultValue={''}
                            />
                        </div>
                    </div>

                    {/* Privacy */}
                    <fieldset>
                        <div className="space-y-2 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:px-6 sm:py-5">
                            <div>
                                <legend className="text-sm font-medium text-gray-900">Gender</legend>
                            </div>
                            <div className="space-y-5 sm:col-span-2">
                                <div className="space-y-5 sm:mt-0">
                                    <div className="relative flex items-start">
                                        <div className="absolute flex items-center h-5">
                                            <input
                                                {...register("gender")}
                                                value="male"
                                                name="gender"
                                                aria-describedby="public-access-description"
                                                type="radio"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                defaultChecked
                                            />
                                        </div>
                                        <div className="pl-7 text-sm">
                                            <label htmlFor="public-access" className="font-medium text-gray-900">
                                                Male
                                            </label>
                                        </div>
                                    </div>
                                    <div className="relative flex items-start">
                                        <div className="absolute flex items-center h-5">
                                            <input
                                                {...register("gender")}
                                                value="female"
                                                name="gender"
                                                aria-describedby="restricted-access-description"
                                                type="radio"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                            />
                                        </div>
                                        <div className="pl-7 text-sm">
                                            <label htmlFor="restricted-access" className="font-medium text-gray-900">
                                                Female
                                            </label>
                                        </div>
                                    </div>
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
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Update
                        </button>
                    </div>
                </div>
            </form>

    )
}
