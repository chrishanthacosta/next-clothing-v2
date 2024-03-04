import React from "react";

type OnChangeFunctionType = (e: React.ChangeEvent<HTMLInputElement>) => void;
type InputFieldParams = {
  label: string;
  id: string;
  name: string;
  autoComplete: string;
  value: string;
  onChange: OnChangeFunctionType;
  placeholder: string;
  labelWidth?: string;
};

const InlineTextInputField = (inputFieldParams: InputFieldParams) => {
  return (
    <div className="flex py-1 px-3">
      <div className={inputFieldParams.labelWidth ? inputFieldParams.labelWidth : "w-1/2"}>
        <label
          htmlFor={inputFieldParams.name}
          className="block text-base font-medium text-[#07074D] py-1 px-2"
        >
          {inputFieldParams.label}
        </label>
      </div>
      <input
        type="text"
        name={inputFieldParams.name}
        id={inputFieldParams.id}
        placeholder={inputFieldParams.placeholder}
        autoComplete={inputFieldParams.autoComplete}
        value={inputFieldParams.value}
        onChange={inputFieldParams.onChange}
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
  );
};

export default InlineTextInputField;
