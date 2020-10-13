import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Player from '../components/contents/Player';
import Button from '../components/reusable/Button';
import Header from '../components/contents/Header';

const PlayerPCGameMode = ({
  computerChoice,
  computerScore,
  roundWinner,
  userScore,
  userChoice,
  playerVsComputerGame,
  selectWinner,
  selectWeapon
}) => {
  return (
    <>
      <h1> Rock Paper Scissors </h1>
      <div className="back btn">
        <Link to={'/'}>
          <Button className="redirect__btn" value="Back to Main Menu" />
        </Link>
      </div>
      <h2>
        {' '}
        <span className="name"> Player </span> {userScore} : {computerScore}{' '}
        <span className="name"> Computer </span>
      </h2>
      <Header roundWin={roundWinner} selectWin={selectWinner} />
      <div id="icons">
        <Player weapon={userChoice} />
        <Player weapon={computerChoice} />
      </div>
      <div id="weapons">
        <Button
          className="weaponBtn"
          onClick={() => selectWeapon('rock')}
          value="rock"
        />{' '}
        <Button
          className="weaponBtn"
          onClick={() => selectWeapon('paper')}
          value="paper"
        />{' '}
        <Button
          className="weaponBtn"
          onClick={() => selectWeapon('scissors')}
          value="scissor"
        />
      </div>{' '}
      <div className="startbtn section">
        <Button
          id="start"
          type="button"
          onClick={playerVsComputerGame}
          className="button startBtn"
          value="Start Game"
        />
      </div>
    </>
  );
};

PlayerPCGameMode.propTypes = {
  userScore: PropTypes.number,
  userChoice: PropTypes.array,
  computerChoice: PropTypes.array,
  computerScore: PropTypes.number,
  roundWinner: PropTypes.string,
  playerVsComputerGame: PropTypes.func,
  selectWinner: PropTypes.func,
  selectWeapon: PropTypes.func
};

export default withRouter(PlayerPCGameMode);
