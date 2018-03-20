import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A switch (styled HTML5 checkbox).
 * @param {on} on Whether the switch is on or off
 * @param {label} label A description of what the switch toggles
 * @param {name} name Unique identifier
 * @param {onClick} onClick Event handler (gets fired when the user clicks the switch)
 * @param {...otherProps} ...otherProps Other (HTML5) props that should be passed to the switch
 */
export const Switch = ({ on, label, name, onClick, ...otherProps }) => (
  <InputWrapper>
    <label htmlFor={name}>{label}</label>
    <input
      type="checkbox"
      name={name}
      id={name}
      checked={on}
      onChange={onClick}
      {...otherProps}
    />
  </InputWrapper>
);

Switch.propTypes = {
  on: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const InputWrapper = styled.div``;
