import { render, screen } from '@testing-library/react';
import { pets } from '../../../mock';
import { Cards } from '../Cards';

describe('Cards', () => {
  test('should render 4 card components', () => {
    render(<Cards pets={pets} />);
    expect(screen.getAllByRole('article').length).toBe(4);
  });
});
