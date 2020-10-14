import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Player from '../components/contents/Player';
import Button from '../components/reusable/Button';

const ComputerGameMode = ({
  computerChoice,
  computerScore,
  roundWinner,
  laptopScore,
  laptopChoice,
  laptopVsComputerGame,
  decideWinner,
  chooseWeapon
}) => {
  return (
    <>
      <div className="computer">
        <h1 className="computer__title">Rock Paper Scissors</h1>
        <div className="computer__back">
          <Link to={'/'}>
            <Button
              className="computer__backBtn computer__backBtn--active"
              value="Back to Main Menu"
            />
          </Link>
        </div>
        <h2 className="computer__score">
          {' '}
          <span className="computer__name"> Laptop </span> {laptopScore} :{' '}
          {computerScore} <span className="computer__name"> Computer</span>
        </h2>
        <h3 className="computer__winner">
          {roundWinner ? decideWinner() : null}
        </h3>
        <div className="computer__icons" id="icons">
          <Player weapon={laptopChoice} />
          <Player weapon={computerChoice} />
        </div>
        <div className="computer__start">
          <Button
            id="start"
            type="button"
            onClick={laptopVsComputerGame}
            className="computer__startBtn computer__startBtn--active"
            value="Start Game!"
          />
        </div>
      </div>
    </>
  );
};

ComputerGameMode.propTypes = {
  laptopScore: PropTypes.number,
  laptopChoice: PropTypes.array,
  computerChoice: PropTypes.array,
  computerScore: PropTypes.number,
  roundWinner: PropTypes.string,
  playerVsComputerGame: PropTypes.func,
  decideWinner: PropTypes.func,
  chooseWeapon: PropTypes.func
};

export default withRouter(ComputerGameMode);
