import React, { useState } from "react";


export default function RadioBoxInput({ value,name, data = [], label, onChange, validate }) {

    return (
        <div className="relative">
            <label className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-400 z-10">{label}</label>
            <fieldset className="grid grid-cols-2 gap-3 p-3 border border-gray-300 rounded-md">
                {data.map((item, index) => (
                    <div className="flex" key={index}>
                        <div className="flex items-center h-5">
                            <CheckboxChild
                                name={name}
                                value={item.label}
                                checked={value}
                                onChange={onChange}
                            />
                            {validate && <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <span className="text-xs text-red-600 mb-1 mr-2">{validate}</span> <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                            </div>}
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


const CheckboxChild = ({ type = "radio", name,value, checked = true, onChange }) => {
    return (
        <input type={type} name={name}  value={value} onChange={onChange} className="focus:ring-0 h-4 w-4 text-sky-800 border-gray-300 rounded" />
    );
};


