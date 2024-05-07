// import React from 'react'
import PropTypes from "prop-types";

export function Button({ label, disabled, size, ...rest }) {
  const buttons = {
    xl: (
      <button disabled={disabled}  {...rest}>
        {label} 
      </button>
    ),
    sm: (
      <button disabled={disabled}  {...rest}>
        {label} 
      </button>
    ),
    lg: (
      <button disabled={disabled}  {...rest}>
        {label} 
      </button>
    ),
  };
        return <>
  {buttons[size] || ""}
  </>;
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["xl", "lg", "sm"]),
};
