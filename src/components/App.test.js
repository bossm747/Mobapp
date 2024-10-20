import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders header', () => {
  render(<App />);
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();
});

test('renders logo', () => {
  render(<App />);
  const logoElement = screen.getByAltText(/logo/i);
  expect(logoElement).toBeInTheDocument();
});

test('renders edit instruction', () => {
  render(<App />);
  const editInstructionElement = screen.getByText(/edit src\/App.js and save to reload/i);
  expect(editInstructionElement).toBeInTheDocument();
});

test('renders learn react link with correct href', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toHaveAttribute('href', 'https://reactjs.org');
});

// Additional test cases to cover different scenarios and edge cases

test('renders App component without crashing', () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});

test('renders App component with correct class name', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toHaveClass('App');
});

test('renders App component with correct header class name', () => {
  render(<App />);
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toHaveClass('App-header');
});

test('renders App component with correct logo class name', () => {
  render(<App />);
  const logoElement = screen.getByAltText(/logo/i);
  expect(logoElement).toHaveClass('App-logo');
});

test('renders App component with correct link class name', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toHaveClass('App-link');
});
