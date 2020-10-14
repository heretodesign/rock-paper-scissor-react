import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import SelectGame from '../pages/SelectGame';
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
const history = createMemoryHistory();

export const renderWithRouter = SelectGame =>
  render(
    <Router history={history}>
      <Route component={SelectGame} />
    </Router>
  );

it('it renders SelectGame', () => {
  const render = () => renderWithRouter(SelectGame);
  const { getByText } = render(<SelectGame />);
  const element = getByText(/Developer: Abel Senwelo/i);
  expect(element).toBeInTheDocument();
});

it('renders the laptop vs PC link button ', () => {
  const render = () => renderWithRouter(SelectGame);
  const { getByText } = render(<SelectGame />);
  const element = getByText(/Laptop vs Desktop/i);
  expect(element).toBeInTheDocument();
  expect(element).toBeDefined();
});

it('renders Player vs Computer button ', () => {
  const render = () => renderWithRouter(SelectGame);
  const { getByText } = render(<SelectGame />);
  const element = getByText(/Player vs Computer/i);
  expect(element).toBeInTheDocument();
  expect(element).toBeDefined();
});

describe('Back Button', () => {
  it('renders Player vs Computer button to redirect to the game scene on click', () => {
    const onClick = jest.fn();

    const render = () => renderWithRouter(SelectGame);
    const { getByText } = render(<SelectGame onClick={onClick} />);

    fireEvent.click(getByText(/Player vs Computer/i));
    expect(onClick).not.toHaveBeenCalled();
  });
});
