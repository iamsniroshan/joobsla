import React, { useState } from "react";


export default function Checkbox({ value, data = [], label, onChange, validate }) {
    const [checkedItems, setCheckedItems] = useState({});

    const handleChange = event => {
        setCheckedItems({
            ...checkedItems,
            [event.target.name]: event.target.checked
        });
    };

    const checkboxes = [
        {
            key: "Full-Time",
            label: "Full-Time"
        },
        {
            key: "Internship",
            label: "Internship"
        },
        {
            key: "Part-Time",
            label: "Part-Time"
        },
        {
            key: "Contract",
            label: "Contract"
        },
    ];

    return (
        <div className="relative my-6">
            <label className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-400 z-10">Job Type</label> 
            <fieldset className="grid grid-cols-2 gap-3 p-3 border border-gray-300 rounded-md">
                {checkboxes.map((item,index) => (
                  <div className="flex" key={index}>
                    <div className="flex items-center h-5">
                    <CheckboxChild
                        label={item.label}
                        checked={checkedItems[item.label]}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="ml-3 text-sm">
                    <label key={item.key}> {item.label}</label>
                    </div>
                  </div>
                ))}
              </fieldset>
        </div>
    );
};


const CheckboxChild = ({ type = "checkbox", label, checked = false, onChange }) => {
    return (
        <input type={type} name={label} checked={checked} onChange={onChange} className="focus:ring-0 h-4 w-4 text-sky-800 border-gray-300 rounded" />
    );
};


