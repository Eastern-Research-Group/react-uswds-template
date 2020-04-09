import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return (
      <button className={`usa-button usa-button--${props.btnStyle}`}>{ props.label }</button>
  );
}

Button.propTypes = {
  btnStyle: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default Button;
