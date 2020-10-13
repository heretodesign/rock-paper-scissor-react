import React, { Component } from 'react';
import Player from './components/contents/Player';
import Button from './components/reusable/Button';

const weapons = ['rock', 'paper', 'scissors'];

class App extends Component {
  state = {
    userChoice: weapons[0],
    userScore: 0,
    computerChoice: weapons[0],
    computerScore: 0,
    roundWinner: ''
  };

  startGame = () => {
    // this.setState({ startNotClicked: false });
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
    // this.setState({ startNotClicked: false });
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
        <h1>Rock Paper Scissors</h1>
        <h2>
          {' '}
          <span className="name"> User </span> {this.state.userScore} :{' '}
          {this.state.computerScore} <span className="name"> Computer</span>
        </h2>
        <h3 className="winner">{roundWinner ? this.selectWinner() : null}</h3>

        <div id="icons">
          <Player weapon={userChoice} />
          <Player weapon={computerChoice} />
        </div>
        <div id="weapons">
          <Button
            className="weaponBtn"
            style={btnStyle}
            onClick={() => this.selectWeapon('rock')}
          >
            rock
          </Button>
          <Button
            className="weaponBtn"
            style={btnStyle}
            onClick={() => this.selectWeapon('paper')}
          >
            paper
          </Button>
          <Button
            className="weaponBtn"
            style={btnStyle}
            onClick={() => this.selectWeapon('scissors')}
          >
            scissor
          </Button>
        </div>
        <div>
          <Button
            id="start"
            type="button"
            onClick={this.startGame}
            className="button startBtn"
          >
            Start Game!
          </Button>
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
  fontSize: '1.2rem'
};

const startBtnStyle = {
  marginTop: '20px',
  background: '#003468',
  color: 'white',
  padding: '5px 20px',
  fontSize: '1.2rem'
};

export default App;
