import { render, screen } from '@testing-library/react';
import App from './App';

test('renders zimca brand logo', () => {
  render(<App />);
  const logoElements = screen.getAllByText(/ZIMCA/i);
  expect(logoElements.length).toBeGreaterThan(0);
});
