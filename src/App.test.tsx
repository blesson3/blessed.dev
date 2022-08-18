import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the homepage with text', () =>
{
  render(<App />);
  expect(screen.getByText(/I'm Matt Blessed/i)).toBeInTheDocument();
  expect(screen.getByText(/A software engineer from Michigan, USA\./i)).toBeInTheDocument();
});
