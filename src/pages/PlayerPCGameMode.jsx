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
      <div className="player">
        <h1 className="player__title player__title--active" data-testid="title">
          Rock Paper Scissors
        </h1>
        <div className="player__btn">
          <Link to={'/'}>
            <Button className="player__redirectBtn" value="Back to Main Menu" />
          </Link>
        </div>
        <h2 className="player__score">
          <span className="player__name"> Player </span> {userScore} :{' '}
          {computerScore} <span className="player__name"> Computer </span>
        </h2>
        <Header roundWin={roundWinner} selectWin={selectWinner} />
        <div className="player__icons">
          <Player weapon={userChoice} />
        </div>
        <div className="player__icons">
          <Player weapon={computerChoice} />
        </div>
        <div className="player__weapons">
          <Button
            className="player__weaponBtn player__weaponBtn--active"
            onClick={() => selectWeapon('rock')}
            value="rock"
            data-testid="rock"
          />
        </div>
        <div className="player__weapons">
          <Button
            className="player__weaponBtn player__weaponBtn--active"
            onClick={() => selectWeapon('paper')}
            value="paper"
          />
        </div>
        <div className="player__weapons">
          <Button
            className="player__weaponBtn player__weaponBtn--active"
            onClick={() => selectWeapon('scissors')}
            value="scissor"
          />
        </div>
        <div className="player__startbtn">
          <Button
            id="start"
            type="button"
            onClick={playerVsComputerGame}
            className="player__startBtn player__startBtn--active"
            value="Start Game"
          />
        </div>
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
