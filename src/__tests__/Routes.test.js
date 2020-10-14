import React from 'react';
import { Router, Route } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Routes from '../Routes';
import About from '../Routes';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import NoMatchRoute from '../components/pageNotFound/NoMatchRoute';
import SelectGame from '../pages/SelectGame';

test('landing on a bad page shows 404 page', () => {
  const history = createMemoryHistory();
  history.push('/some/bad/route');
  const { getByRole } = render(
    <Router history={history}>
      <Route component={NoMatchRoute} />
    </Router>
  );
  expect(getByRole('heading')).toHaveTextContent('404 Page Not Found');
});

test('full Routes rendering/navigating', () => {
  const history = createMemoryHistory();
  const { container, getByText } = render(
    <Router history={history}>
      <Route exact={true} path="/" component={SelectGame} />
    </Router>
  );
  const element = getByText(/Player vs Computer/i);
  expect(element).toBeInTheDocument();
});

test('Routes renders SelectGame pages and I can navigate to SelectGame page', () => {
  const history = createMemoryHistory();
  const { container, getByText, getByTestId } = render(
    <Router history={history}>
      <Route exact={true} path="/" component={SelectGame} />
    </Router>
  );

  fireEvent.click(getByText('Developer: Abel Senwelo'));
  expect(history.location.pathname).toBe('/');
});
