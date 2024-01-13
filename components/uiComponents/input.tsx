import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  name: string;
  imageSrc?: string;
}

function checkInputValue(input: { value: string; classList: { add: (arg0: string) => void; remove: (arg0: string) => void } }) {
  if (input.value.trim() !== "") {
    input.classList.add("border-green-500");
  } else {
    input.classList.remove("border-green-500");
  }
}

export const Input: React.FC<InputProps> = ({ label, name, type, onChange, ...rest }) => {
  if (type === "textarea") {
    return (
      <div className="relative mb-5 w-full block">
        <textarea
          required
          id={name}
          autoComplete="on"
          className="peer block w-full invalid:border rounded-lg peer-placeholder-shown:border border-gray-500 bg-transparent opacity-60 pb-2.5 pt-4 text-sm focus:border-gray-800 focus:outline-none"
          placeholder=" "
          onChange={onChange}
          {...rest}
        />
        <label
          htmlFor={name}
          className="absolute top-2 peer-invalid:px-2 font-bold z-10 origin-[0] -translate-y-4 peer-invalid:scale-75 transform rounded-xl peer-invalidtext-sm duration-300 peer-placeholder-shown:font-light peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:font-bold peer-focus:bg-[rgb(217,221,247)] dark:peer-focus:bg-[#0d1025]  peer-focus:text-gray-800 dark:peer-focus:text-white"
        >
          {label}
        </label>
      </div>
    );
  }

  if (type === "checkbox") {
    return (
      <div className="relative mb-5">
        <div className="flex items-center mb-4">
          <input
            id={name}
            type="checkbox"
            autoComplete="on"
            onChange={onChange}
            {...rest}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor={name} className="ml-2 text-sm  text-gray-800">
            {label}
          </label>
        </div>
      </div>
    );
  }
  if (type === "date") {
    return (
      <div className="relative mb-5 w-full">
        <div className="flex flex-row gap-5 ">
          <input
            required
            id={name}
            type={type}
            autoComplete="on"
            className={`peer pr-5 block w-full invalid:border rounded-lg peer-placeholder-shown:border border-gray-500 bg-transparent opacity-60 pb-2.5 pt-4 text-sm focus:border-gray-800 focus:outline-none `}
            placeholder=" "
            onChange={onChange}
            {...rest}
          />
          <input
            required
            id={`${name}-time`}
            type="time"
            autoComplete="on"
            className={`peer block pr-5 w-full invalid:border rounded-lg peer-placeholder-shown:border border-gray-500 bg-transparent opacity-60 pb-2.5 pt-4 text-sm focus:border-gray-800 focus:outline-none `}
            placeholder=" "
            onChange={onChange} // Handle time change
            {...rest}
          />
        </div>
        <label
          htmlFor={name}
          className="absolute top-2 peer-invalid:px-2 font-bold z-10 origin-[0] -translate-y-4 peer-invalid:scale-75 transform rounded-xl peer-invalidtext-sm duration-300 peer-placeholder-shown:font-light peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:font-bold peer-focus:bg-[rgb(217,221,247)] dark:peer-focus:bg-[#0d1025]  peer-focus:text-gray-800 dark:peer-focus:text-white"
        >
          {label}
        </label>
      </div>
    );
  }

  return (
    <div className="relative mb-5 w-full">
      <input
        required
        id={name}
        type={type}
        autoComplete="on"
        className="peer block w-full invalid:border rounded-lg peer-placeholder-shown:border border-gray-500 bg-transparent opacity-60 pb-2.5 pt-4 text-sm focus:border-gray-800 focus:outline-none"
        placeholder=" "
        onChange={onChange}
        {...rest}
      />
      <label
        htmlFor={name}
        className="absolute top-2 peer-invalid:px-2 font-bold z-10 origin-[0] -translate-y-4 peer-invalid:scale-75 transform rounded-xl peer-invalidtext-sm duration-300 peer-placeholder-shown:font-light peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:font-bold peer-focus:bg-[rgb(217,221,247)] dark:peer-focus:bg-[#0d1025]  peer-focus:text-gray-800 dark:peer-focus:text-white"
      >
        {label}
      </label>
    </div>
  );
};
