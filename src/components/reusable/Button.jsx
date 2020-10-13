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
      style={startBtnStyle}
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

const startBtnStyle = {
  marginTop: '20px',
  background: '#003468',
  color: 'white',
  padding: '5px 20px',
  fontSize: '1.2rem'
};
export default Button;
