import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ roundWin, selectWin }) => {
  return (
    <div className="header">
      <h3 className="winner"> {roundWin ? selectWin() : null} </h3>
    </div>
  );
};

Header.propTypes = {
  roundWin: PropTypes.string,
  selectWin: PropTypes.func
};

export default Header;
