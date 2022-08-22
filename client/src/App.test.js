import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('should render Pet Place title', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /pet place/i })
    ).toBeInTheDocument();
  });
});
