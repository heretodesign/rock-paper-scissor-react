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
      <h1>Rock Paper Scissors</h1>
      <div className="back btn">
        <Link to={'/'}>
          <Button className="btn backBtn" value="Back to Main Menu" />
        </Link>
      </div>
      <h2>
        {' '}
        <span className="name"> Laptop </span> {laptopScore} : {computerScore}{' '}
        <span className="name"> Computer</span>
      </h2>
      <h3 className="winner">{roundWinner ? decideWinner() : null}</h3>

      <div id="icons">
        <Player weapon={laptopChoice} />
        <Player weapon={computerChoice} />
      </div>
      <div className="start-btn">
        <Button
          id="start"
          type="button"
          onClick={laptopVsComputerGame}
          className="button startBtn"
          value="Start Game!"
        />
      </div>
    </>
  );
};

const btnStyle = {
  marginTop: '20px',
  marginRight: '25px',
  background: '#003468',
  borderColor: '#f3f3f3',
  color: 'white',
  padding: '5px 20px',
  fontSize: '1.2rem',
  textDecoration: 'none'
};

const startBtnStyle = {
  marginTop: '20px',
  background: '#003468',
  color: 'white',
  padding: '5px 20px',
  fontSize: '1.2rem'
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

export default ComputerGameMode;
