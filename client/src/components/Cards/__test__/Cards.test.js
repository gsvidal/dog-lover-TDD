import { render, screen } from '@testing-library/react';
import { Cards } from '../Cards';

describe('Cards', () => {
  test('should render 4 card components', () => {
    render(
      <PetsProvider>
        <Cards />
      </PetsProvider>
    );
    expect(screen.getAllByRole('article').length).toBe(4);
  });
});
