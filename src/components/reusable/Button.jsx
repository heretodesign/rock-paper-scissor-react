import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, className, value, onClick }) => {
  return (
    <button
      type={type}
      className={className}
      // onClick={`btn button ${onClick}`}
      onClick={onClick}
      data-testid="btn-submit"
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: 'submit'
};

export default Button;
