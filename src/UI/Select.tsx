import React, { ChangeEvent, FC } from "react";
import Form from "react-bootstrap/Form";

interface SelectProps {
  options: string[];
  selectedOption: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  name: string;
}

const Select: FC<SelectProps> = ({
  name,
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <Form.Group className="text-align-start text-start mb-3">
      <h6 className=" text-capitalize">{name}:</h6>
      <Form.Select onChange={onChange} value={selectedOption} name={name}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default Select;
