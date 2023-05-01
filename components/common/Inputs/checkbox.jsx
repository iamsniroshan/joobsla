import React, { useEffect, useState } from "react";


export default function Checkbox({ value, options = [], label, onChange, validate }) {
    const [checkedItems, setCheckedItems] = useState({});

    const handleChange = event => {
        setCheckedItems({
            [event.target.name]: event.target.checked
        });
    };

    useEffect(() => {
        if(checkedItems[Object.keys(checkedItems)[0]] === true) {
            onChange(options.find(e => e.value == Object.keys(checkedItems)[0]) || {})
        } else {
            onChange({})
        }
    }, [checkedItems]);

    return (
        <div className="relative">
            <label className="absolute -top-2 left-2 -mt-px z-[5] inline-block px-1 bg-white text-xs font-medium text-gray-400">Job Type</label>
            <fieldset className="grid grid-cols-2 gap-3 p-3 border border-gray-300 rounded-md">
                {options.map((item, index) => (
                    <div className="flex" key={index}>
                        <div className="flex items-center h-5">
                            <CheckboxChild
                                label={item.value}
                                checked={checkedItems[item.value]}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label key={item.value}> {item.label}</label>
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


