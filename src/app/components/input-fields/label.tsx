import React from "react";

type InputFieldParams = {
  label: string;
  name: string;
};

const Label = (inputFieldParams: InputFieldParams) => {
  return (
    <div className="flex border-b">
      <label
        htmlFor={inputFieldParams.name}
        className="block text-base font-medium text-[#07074D]"
      >
        {inputFieldParams.label}
      </label>
    </div>
  );
};

export default Label;
