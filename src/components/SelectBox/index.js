import React from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select';

function SelectBox({
  name,
  options,
  isClearable,
  value,
  placeholder,
  handleChange,
  label,
}) {
  return (
    <Form.Group className='mb-2'>
      {label && <Form.Label>{label}</Form.Label>}
      <Select
        defaultValue={value}
        name={name}
        isClearable={isClearable}
        placeholder={placeholder}
        options={options}
        onChange={handleChange}
      />
    </Form.Group>
  );
}

export default SelectBox;
