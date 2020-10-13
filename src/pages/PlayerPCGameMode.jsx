import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Player from '../components/contents/Player';
import Button from '../components/reusable/Button';

const weapons = ['rock', 'paper', 'scissors'];

class PlayerPCGameMode extends Component {
  state = {
    userChoice: weapons[0],
    userScore: 0,
    computerChoice: weapons[0],
    computerScore: 0,
    roundWinner: ''
  };

  startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        computerChoice: weapons[Math.floor(Math.random() * weapons.length)],
        // computerChoice: weapons[Math.floor(Math.random() * weapons.length)],
        roundWinner: ''
      });
      if (counter > 5) {
        clearInterval(gameInterval);
        this.setState({
          roundWinner: this.selectWinner()
        });
        if (this.state.roundWinner === 'Player Won the Game!') {
          this.setState({
            userScore: this.state.userScore + 1
          });
        } else if (this.state.roundWinner === 'Player Lost the Game!') {
          this.setState({
            computerScore: this.state.computerScore + 1
          });
        }
      }
    }, 100);
  };

  selectWinner = () => {
    const { userChoice, computerChoice } = this.state;
    if (userChoice === computerChoice) {
      return "It's a Tie!";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'scissors' && computerChoice === 'paper') ||
      (userChoice === 'paper' && computerChoice === 'rock')
    ) {
      return 'You Won!';
    } else {
      return 'You Lost!';
    }
  };
  selectWeapon = weapon => {
    this.setState({
      userChoice: weapon,
      roundWinner: ''
    });
  };
  render() {
    const { userChoice, computerChoice, roundWinner } = this.state;
    return (
      <>
        <h1> Rock Paper Scissors </h1>
        <div className="back btn">
          <Link to={'/'}>
            <Button value="Back to Main Menu" />
          </Link>
        </div>
        <h2>
          {' '}
          <span className="name"> Player </span> {this.state.userScore} :{' '}
          {this.state.computerScore} <span className="name"> Computer </span>
        </h2>
        <h3 className="winner"> {roundWinner ? this.selectWinner() : null} </h3>
        <div id="icons">
          <Player weapon={userChoice} />
          <Player weapon={computerChoice} />
        </div>
        <div id="weapons">
          <Button
            className="weaponBtn"
            onClick={() => this.selectWeapon('rock')}
            value="rock"
          />{' '}
          <Button
            className="weaponBtn"
            onClick={() => this.selectWeapon('paper')}
            value="paper"
          />{' '}
          <Button
            className="weaponBtn"
            onClick={() => this.selectWeapon('scissors')}
            value="scissor"
          />
        </div>{' '}
        <div className="btn section">
          <Button
            id="start"
            type="button"
            onClick={this.startGame}
            className="button startBtn"
            value="Start Game"
          />
        </div>
      </>
    );
  }
}

export default PlayerPCGameMode;
