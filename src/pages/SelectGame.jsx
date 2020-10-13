import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import gameLogo from '../images/logo.svg';
import Button from '../components/reusable/Button';

const SelectGame = () => {
  return (
    <div className="homepage">
      <header className="homepage__header">
        {/*<img
          src={gameLogo}
          alt="Logo"
          className="homepage__logo"
          data-testid="logo"
        />*/}
        <h2 className="homepage__credits">
          <span className="homepage__credits-2">Developer: Abel Senwelo</span>
        </h2>
      </header>
      <h1 className="homepage__welcome">Select Game</h1>
      <h3 className="homepage__mode">Two Game Mode</h3>
      <div className="select-mode">
        <div className="buttons btn">
          <Link to="/laptop-vs-desktop-game-mode" className="homepage__btn">
            <Button value="Laptop vs Desktop" />
          </Link>
          {'  '}
          {'  '}
          <Link to="/player-vs-computer-game-mode" className="homepage__btn">
            <Button value="Player vs Computer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

SelectGame.propTypes = {};

export default withRouter(SelectGame);
