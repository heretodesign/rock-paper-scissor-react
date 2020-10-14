import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Button from '../components/reusable/Button';
import '../App.scss';

const SelectGame = () => {
  return (
    <div className="homepage">
      <header className="homepage__header">
        <h2 className="homepage__credits">
          <span className="homepage__credits--name">
            Developer: Abel Senwelo
          </span>
        </h2>
      </header>
      <h1 className="homepage__mode">Select Game Mode</h1>
      <div className="homepage__selectMode">
        <div className="homepage__linkBtns">
          <Link to="/laptop-vs-desktop-game-mode" className="homepage__btn">
            <Button
              className="homepage__redirectBtn homepage__redirectBtn--active"
              value="Laptop vs Desktop"
            />
          </Link>
        </div>
        <div className="homepage__linkBtns">
          <Link to="/player-vs-computer-game-mode" className="homepage__btn">
            <Button
              className="homepage__redirectBtn homepage__redirectBtn--active"
              value="Player vs Computer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SelectGame);
