import React from 'react';
import PropTypes from 'prop-types';
import rock from '../../images/icon-rock.svg';
import paper from '../../images/icon-paper.svg';
import scissor from '../../images/icon-scissors.svg';

const Player = ({ weapon }) => {
  return (
    <div className="player">
      <img
        className="player__image"
        src={weapon === 'rock' ? rock : weapon === 'scissors' ? scissor : paper}
        alt="rock paper scissors"
      />
    </div>
  ); 
};

Player.propTypes = {
  weapon: PropTypes.string
};

export default Player;
