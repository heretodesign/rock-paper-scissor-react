import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import PlayerPCGameMode from '../pages/PlayerPCGameMode';
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
const history = createMemoryHistory();

export const renderWithRouter = PlayerPCGameMode =>
  render(
    <Router history={history}>
      <Route component={PlayerPCGameMode} />
    </Router>
  );

const props = {
  computerChoice: 'rock',
  computerScore: '0',
  roundWinner: 'player',
  userScore: '1',
  userChoice: 'paper'
};

it('it renders the game Header', () => {
  const render = () => renderWithRouter(PlayerPCGameMode);
  const { getByText } = render(<PlayerPCGameMode {...props} />);
  expect(getByText(/Rock Paper Scissors/i)).toBeInTheDocument();
});

it('it renders the game Header', () => {
  const render = () => renderWithRouter(PlayerPCGameMode);
  const { getByTestId } = render(<PlayerPCGameMode {...props} />);
  expect(getByTestId('title')).toBeInTheDocument();
});

it('it renders redirect button with the value of Back to Main Menu', () => {
  const render = () => renderWithRouter(PlayerPCGameMode);
  const { getByText } = render(<PlayerPCGameMode {...props} />);
  const element = getByText(/Back to Main Menu/i);
  expect(element).toBeInTheDocument();
});

it('it renders Player option', () => {
  const render = () => renderWithRouter(PlayerPCGameMode);
  const { getByText } = render(<PlayerPCGameMode {...props} />);
  const element = getByText(/Player/i);
  expect(element).toBeInTheDocument();
});

it('it renders the Computer option', () => {
  const render = () => renderWithRouter(PlayerPCGameMode);
  const { getByText } = render(<PlayerPCGameMode {...props} />);
  const element = getByText(/Computer/i);
  expect(element).toBeInTheDocument();
});

it('it renders start game button with the value of Start Game', () => {
  const render = () => renderWithRouter(PlayerPCGameMode);
  const { getByText } = render(<PlayerPCGameMode {...props} />);
  const element = getByText(/Start Game/i);
  expect(element).toBeInTheDocument();
});

describe('Buttons', () => {
  it('renders the redirect button to redirect to the selectgame on click', () => {
    const onClick = jest.fn();

    const render = () => renderWithRouter(PlayerPCGameMode);
    const { getByText } = render(<PlayerPCGameMode onClick={onClick} />);

    fireEvent.click(getByText(/Back to Main Menu/i));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('renders the start button to play the game on click', () => {
    const onClick = jest.fn();

    const render = () => renderWithRouter(PlayerPCGameMode);
    const { getByText } = render(<PlayerPCGameMode onClick={onClick} />);

    fireEvent.click(getByText(/Start Game/i));
    expect(onClick).not.toHaveBeenCalled();
  });
});
