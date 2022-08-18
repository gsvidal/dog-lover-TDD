import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Filter } from '../Filter';

describe('Filter', () => {
  test('should be able to change value of favorite selected', () => {
    render(<Filter />);
    const selectElement = screen.getByLabelText(/favorite status/i);
    expect(selectElement.value).toBe('any');

    userEvent.selectOptions(selectElement, 'favorite');
    expect(selectElement.value).toBe('favorite');

    userEvent.selectOptions(selectElement, 'no favorite');
    expect(selectElement.value).toBe('no favorite');
  });

  test('should be able to change value of gender selected', () => {
    render(<Filter />);
    const selectElement = screen.getByLabelText(/gender status/i);
    expect(selectElement.value).toBe('any');

    userEvent.selectOptions(selectElement, 'female');
    expect(selectElement.value).toBe('female');

    userEvent.selectOptions(selectElement, 'male');
    expect(selectElement.value).toBe('male');
  });
});
