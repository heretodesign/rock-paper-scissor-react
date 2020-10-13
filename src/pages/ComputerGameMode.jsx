import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Player from '../components/contents/Player';
import Button from '../components/reusable/Button';

const weapons = ['rock', 'paper', 'scissors'];

class ComputerGameMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laptopChoice: weapons[0],
      laptopScore: 0,
      computerChoice: weapons[0],
      computerScore: 0,
      roundWinner: ''
    };
  }

  startGame = () => {
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
        if (this.state.roundWinner === 'Laptop Won!') {
          this.setState({
            laptopScore: this.state.laptopScore + 1
          });
        } else if (this.state.roundWinner === 'Laptop Lost!') {
          this.setState({
            computerScore: this.state.computerScore + 1
          });
        }
      }
    }, 3000);
  };

  selectWinner = () => {
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
  selectWeapon = weapon => {
    this.setState({
      laptopChoice: weapons[Math.floor(Math.random() * weapons.length)],
      roundWinner: ''
    });
  };
  render() {
    const { laptopChoice, computerChoice, roundWinner } = this.state;
    return (
      <>
        <h1>Rock Paper Scissors</h1>
        <div className="back btn">
          <Link to={'/'}>
            <Button value="Back to Main Menu" />
          </Link>
        </div>
        <h2>
          {' '}
          <span className="name"> Laptop </span> {this.state.laptopScore} :{' '}
          {this.state.computerScore} <span className="name"> Computer</span>
        </h2>
        <h3 className="winner">{roundWinner ? this.selectWinner() : null}</h3>

        <div id="icons">
          <Player weapon={laptopChoice} />
          <Player weapon={computerChoice} />
        </div>
        <div className="start-btn">
          <Button
            id="start"
            type="button"
            onClick={this.startGame}
            className="button startBtn"
            value="Start Game!"
          />
        </div>
      </>
    );
  }
}

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

export default ComputerGameMode;
