import React from 'react';
import PropTypes from 'prop-types';

function Alert(props) {
  return (
    <div className={`usa-alert usa-alert--${props.type}`}>
      <div className="usa-alert__body">
        <p className="usa-alert__text">{props.message}</p>
      </div>
    </div>
  );
}

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string.isRequired,
};

Alert.defaultProps = {
  type: 'info',
};

export default Alert;