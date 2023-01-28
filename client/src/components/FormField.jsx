import React from 'react'

function FormField({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSupriseMe,
  handleSupriseMe,
}) {
  return (
    <div className="mt-4">
      <div className="mb-4 flex items-center gap-2">
        <label
          htmlFor={name}
          className="block text-sm font-semibold text-gray-900"
        >
          {labelName}
        </label>
        {isSupriseMe && (
          <button
            className="rounded-[5px] bg-[#EcECF1] py-1 px-2 text-xs font-semibold text-black"
            type="button"
            onClick={handleSupriseMe}
          >
            Suprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="block w-full rounded-lg bg-gray-50 p-3 text-sm text-gray-900 shadow-md outline-none focus:shadow-lg"
      />
    </div>
  )
}

export default FormField
