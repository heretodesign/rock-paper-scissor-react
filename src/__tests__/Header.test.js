import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Header from '../components/contents/Header';

afterEach(cleanup);

describe('Header Micro Component', () => {
  it('it renders the round score props', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('roundWinner')).toBeInTheDocument();
    expect(getByTestId('roundWinner')).toBeDefined();
  });

  it('it renders the game roundWinner description', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('roundWinner')).toBeInTheDocument();
  });
});
