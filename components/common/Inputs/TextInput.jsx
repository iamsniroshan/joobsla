
export default function TextInput({ value, label, name, placeholder, type, onChange }) {
  return (
    <div className="relative my-6">
      {label && <label
        htmlFor="name"
        className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-400"
      >
        {label}
      </label>}

      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-0 focus:border-teal-600"
      />
    </div>
  )
}
