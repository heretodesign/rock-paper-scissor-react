import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import ComputerGameMode from '../pages/ComputerGameMode';
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
const history = createMemoryHistory();

export const renderWithRouter = ComputerGameMode =>
  render(
    <Router history={history}>
      <Route component={ComputerGameMode} />
    </Router>
  );

const props = {
  computerChoice: 'rock',
  computerScore: '0',
  roundWinner: 'player',
  laptopScore: '1',
  laptopChoice: 'paper'
};

it('it renders Header', () => {
  const render = () => renderWithRouter(ComputerGameMode);
  const { getByText } = render(<ComputerGameMode {...props} />);
  const element = getByText(/Rock Paper Scissors/i);
  expect(element).toBeInTheDocument();
});
it('it renders Back to Main Menu button', () => {
  const render = () => renderWithRouter(ComputerGameMode);
  const { getByText } = render(<ComputerGameMode {...props} />);
  const element = getByText(/Back to Main Menu/i);
  expect(element).toBeInTheDocument();
});

it('it renders Laptop option', () => {
  const render = () => renderWithRouter(ComputerGameMode);
  const { getByText } = render(<ComputerGameMode {...props} />);
  const element = getByText(/Laptop/i);
  expect(element).toBeInTheDocument();
});

it('it renders Computer option', () => {
  const render = () => renderWithRouter(ComputerGameMode);
  const { getByText } = render(<ComputerGameMode {...props} />);
  const element = getByText(/Computer/i);
  expect(element).toBeInTheDocument();
});

it('it renders start game button with the value of Start Game', () => {
  const render = () => renderWithRouter(ComputerGameMode);
  const { getByText } = render(<ComputerGameMode {...props} />);
  const element = getByText(/Start Game/i);
  expect(element).toBeInTheDocument();
});

describe('Buttons', () => {
  it('renders the redirect button to redirect to the selectgame on click', () => {
    const onClick = jest.fn();

    const render = () => renderWithRouter(ComputerGameMode);
    const { getByText } = render(<ComputerGameMode onClick={onClick} />);

    fireEvent.click(getByText(/Back to Main Menu/i));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('renders the start button to play the game on click', () => {
    const onClick = jest.fn();

    const render = () => renderWithRouter(ComputerGameMode);
    const { getByText } = render(<ComputerGameMode onClick={onClick} />);

    fireEvent.click(getByText(/Start Game/i));
    expect(onClick).not.toHaveBeenCalled();
  });
});
