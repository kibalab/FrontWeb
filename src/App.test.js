import { render, screen } from '@testing-library/react';
import {App, Menu} from './App';

test('renders learn react link', () => {
  render(<App />);
  render(<Menu />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
