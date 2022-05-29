import React, { useContext } from 'react'
import OrderContext from '../OrderContext';



const JobDescriptionComponent = () => {

    const { postDetails, setPostDetails } = useContext(OrderContext); // Context API

    const handleInputChange = ({ target: { name, value } }) => {
        const data = { ...postDetails }
        data["jobDescription"][name] = value;
        setPostDetails(data);
    }

    // Destructuring object from Context API
    const { jobDescription } = postDetails;

    return (
        <>

                    <form>
                        <div className="bg-white  py-10  h-96">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Job Title
                                    </label>
                                    <input
                                        type="text"
                                        name="desc" value={jobDescription.desc} placeholder="Job description" onChange={handleInputChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                            </div>
                        </div>
                    </form>
        </>
    )
}
export default JobDescriptionComponent