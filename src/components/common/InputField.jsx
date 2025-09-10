import React from 'react';

const InputField = ({ 
  label, 
  id, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  error, 
  className = '' 
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`shadow appearance-none border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500 transition duration-200`}
      />
      {error && <p className="text-red-500 text-xs italic mt-2">{error}</p>}
    </div>
  );
};

export default InputField;