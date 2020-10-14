import React, { Component, useState, Fragment } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.scss';
import Button from './components/reusable/Button';
import SelectGame from './pages/SelectGame';
import PlayerPCGameMode from './pages/PlayerPCGameMode';
import ComputerGameMode from './pages/ComputerGameMode';
const About = () => (
  /* *@testing*/
  <div data-testid="about-screen">You are on the about page</div>
);

const weapons = ['rock', 'paper', 'scissors'];

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoice: weapons[0],
      userScore: 0,
      laptopChoice: weapons[0],
      laptopScore: 0,
      computerChoice: weapons[0],
      computerScore: 0,
      roundWinner: ''
    };
  }

  /*
   * @select laptop vs computer
   */
  laptopVsComputerGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        computerChoice: weapons[Math.floor(Math.random() * weapons.length)],
        laptopChoice: weapons[Math.floor(Math.random() * weapons.length)],
        roundWinner: ''
      });
      if (counter > 5) {
        clearInterval(gameInterval);
        this.setState({
          roundWinner: this.selectWinner()
        });
        if (this.state.roundWinner === 'Laptop AI Robot Won!') {
          this.setState({
            laptopScore: this.state.laptopScore + 1
          });
        } else if (this.state.roundWinner === 'Laptop AI Robot Lost!') {
          this.setState({
            computerScore: this.state.computerScore + 1
          });
        }
      }
    }, 1000);
  };

  /*
   * @select Player vs computer
   */
  playerVsComputerGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        computerChoice: weapons[Math.floor(Math.random() * weapons.length)],
        roundWinner: ''
      });
      if (counter > 5) {
        clearInterval(gameInterval);
        this.setState({
          roundWinner: this.selectWinner()
        });
        if (this.state.roundWinner === 'You Won!') {
          this.setState({
            userScore: this.state.userScore + 1
          });
        } else if (this.state.roundWinner === 'You Lost!') {
          this.setState({
            computerScore: this.state.computerScore + 1
          });
        }
      }
    }, 100);
  };

  /*
   * @laptop vs computer
   */
  decideWinner = () => {
    const { laptopChoice, computerChoice } = this.state;
    if (laptopChoice === computerChoice) {
      return "It's a Tie!";
    } else if (
      (laptopChoice === 'rock' && computerChoice === 'scissors') ||
      (laptopChoice === 'scissors' && computerChoice === 'paper') ||
      (laptopChoice === 'paper' && computerChoice === 'rock')
    ) {
      return 'Laptop Won!';
    } else {
      return 'Laptop Lost!';
    }
  };
  chooseWeapon = weapon => {
    this.setState({
      laptopChoice: weapons[Math.floor(Math.random() * weapons.length)],
      roundWinner: ''
    });
  };

  /*
   * @player vs computer
   */
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
    const {
      userChoice,
      computerScore,
      roundWinner,
      userScore,
      laptopChoice,
      laptopScore,
      computerChoice
    } = this.state;

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={SelectGame} />
          <Route
            path={`/player-vs-computer-game-mode`}
            render={props => (
              <PlayerPCGameMode
                computerChoice={computerChoice}
                computerScore={computerScore}
                roundWinner={roundWinner}
                userScore={userScore}
                userChoice={userChoice}
                selectWinner={this.selectWinner}
                selectWeapon={this.selectWeapon}
                playerVsComputerGame={this.playerVsComputerGame}
              />
            )}
          />
          <Route
            path={`/laptop-vs-desktop-game-mode`}
            render={props => (
              <ComputerGameMode
                computerChoice={computerChoice}
                computerScore={computerScore}
                roundWinner={roundWinner}
                laptopScore={laptopScore}
                laptopChoice={laptopChoice}
                laptopVsComputerGame={this.laptopVsComputerGame}
                decideWinner={this.decideWinner}
                chooseWeapon={this.chooseWeapon}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

Routes.propTypes = {
  userScore: PropTypes.number,
  computerScore: PropTypes.number,
  laptopScore: PropTypes.number,
  roundWinner: PropTypes.string,
  userChoice: PropTypes.array,
  laptopChoice: PropTypes.array,
  computerChoice: PropTypes.array
};

export default Routes;
