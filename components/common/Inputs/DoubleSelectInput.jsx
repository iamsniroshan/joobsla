export default function DoubleSelectInput({ value, childSelect, label, name, placeholder, type, onChange }) {
    return (
        <>
            <div className="mt-1 relative rounded-md shadow-sm">
                {label && <label
                    htmlFor="name"
                    className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-500"
                >
                    {label}
                </label>}
                <input
                    type={type}
                    value={value[name]}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-0 focus:border-teal-600"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="currency" className="sr-only">
                        {childSelect.label}
                    </label>
                    <select
                        value={value[childSelect.name]}
                        onChange={onChange}
                        name={childSelect.name}
                        className="focus:ring-0 focus:border-0 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                    >
                        {childSelect.data.map(e => <option value={e.value}>{e.label}</option>)}
                    </select>
                </div>
            </div>
        </>
    )
}
// CurrencyInput.defaultProps = { value: { minAmount: '', currency: '' }, label: '', placeholder: '', type: '' }