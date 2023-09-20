import React from "react";
import { styled } from "styled-components";

const FormControl = ({
  id,
  name,
  type,
  onChange,
  select,
  value,
  children,
  label,
  file,
}) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      {(select && (
        <select onChange={onChange} name={name} id={id}>
          {children}
        </select>
      )) || (
        <input
          onChange={onChange}
          type={type || "text"}
          name={name}
          id={id}
          value={value}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  select,
  input {
    width: 100%;
    color: #000;
    font-size: 16px;
    outline: none;
    background-color: #fff;
    border-radius: 0.375rem;
    padding: 0.75rem 1rem;
    border: 1px solid #e5e7eb;
  }

  label {
    position: absolute;
    text-transform: capitalize;
    top: -0.75rem;
    left: 0.5rem;
    background-color: #fff;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #9ca3af;
    transition: all 0.3s;
  }

  .peer:focus ~ .peer-focus {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

export default FormControl;
