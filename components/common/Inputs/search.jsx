import { useState } from "react";


const jobType = [
    { label: 'IT-Sware/DB/QA/Web/Graphics/GIS', value: '10', id: 1 },
    { label: 'IT-HWare/Networks/Systems', value: '20', id: '2' },
    { label: 'Accounting/Auditing/Finance', value: '100', id: '3' },
    { label: 'Banking/Insurance', value: '10', id: '4' },
    { label: 'Sales/Marketing/Merchandising', value: '58', id: '5' },
    { label: 'HR/Training', value: '58', id: '5' },
    { label: 'Corporate Management/Analysts', value: '58', id: '5' },
    { label: 'Office Admin/Secretary/Receptionist', value: '58', id: '5' },
    { label: 'Civil Eng/Interior Design/Architecture', value: '58', id: '5' },
    { label: 'IT-Telecoms', value: '58', id: '5' },
    { label: 'Customer Relations/Public Relations', value: '58', id: '5' },
    { label: 'Logistics/Warehouse/Transport', value: '58', id: '5' },
    { label: 'Eng-Mech/Auto/Elec', value: '58', id: '5' },
    { label: 'Manufacturing/Operations', value: '58', id: '5' },
    { label: 'Media/Advert/Communication', value: '58', id: '5' },
    { label: 'Hotels/Restaurants/Food', value: '58', id: '5' },
    { label: 'Hospitality/Tourism', value: '58', id: '5' },
    { label: 'Hospitality/Tourism', value: '58', id: '5' },
    { label: 'Sports/Fitness/Recreation', value: '58', id: '5' },
    { label: 'Hospital/Nursing/Healthcare', value: '58', id: '5' },
    { label: 'Legal/Law', value: '58', id: '5' },
    { label: 'Supervision/Quality Control', value: '58', id: '5' },
    { label: 'Apparel/Clothing', value: '58', id: '5' },
    { label: 'Ticketing/Airline/Marine', value: '58', id: '5' },
    { label: 'Teaching/Academic/Library', value: '58', id: '5' },
    { label: 'R&D/Science/Research', value: '58', id: '5' },
    { label: 'Agriculture/Dairy/Environment', value: '58', id: '5' },
    { label: 'Security', value: '58', id: '5' },
    { label: 'Fashion/Design/Beauty', value: '58', id: '5' },
    { label: 'International Development', value: '58', id: '5' },
    { label: 'KPO/BPO', value: '58', id: '5' },
    { label: 'Imports/Exports', value: '58', id: '5' },
]

export default function SearchComponent() {

    const [suggestions, setSuggestion] = useState([])
    const [text, setText] = useState('');


    const onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = jobType.sort().filter(v => regex.test(v.label));
        } else {
            suggestions = jobType
        }
        setSuggestion(suggestions)
        setText(value)
    }

    const suggestionSelected = (value) => {
        setSuggestion([])
        setText(value)
    }

    const renderSuggestions = () => {
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <div className="srchList">
                <ul className="bg-gary-100">
                    {suggestions.map((item) => <li className="hover:bg-sky-200 px-3 py-2 cursor-pointer text-xs" onClick={() => suggestionSelected(item.label)}>{item.label}</li>)}
                </ul>
            </div>
        );
    }

    return (
        <>
            <div>
                {/* <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 pb-1"
          >
            Category
          </label> */}
                <div className="flex mt-1 border-gray-300 focus-within:border-gray-300 relative">
                    <input
                        value={text}
                        onClick={onTextChanged}
                        onChange={onTextChanged}
                        type="text"
                        id="floating_outlined"
                        class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Jane Doe"
                    />
                    <label
                        for="floating_outlined"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >Category</label>
                    {suggestions.length > 0 && (<div className="absolute w-full py-1 border border-gray-300 mt-10 overflow-auto text-base bg-gray-100 rounded-md max-h-60  focus:outline-none sm:text-sm">
                        {renderSuggestions()}
                    </div>)}
                </div>

            </div>
        </>
    );
}



