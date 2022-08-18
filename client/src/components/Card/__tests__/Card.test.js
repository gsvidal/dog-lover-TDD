import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card } from '../Card';

const cardProps = {
  name: 'Sydney',
  phoneNumber: '111-111-1111',
  email: 'jamal@hotmail.com',
  image: {
    url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    alt: 'golden retriever dog pic',
  },
  isFavorite: false,
  updateFavorite: () => {},
  index: 1,
};

describe('Card', () => {
  test('should show pet name', () => {
    render(<Card {...cardProps} />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('should show phone number', () => {
    render(<Card {...cardProps} />);

    expect(screen.getByText('111-111-1111')).toBeInTheDocument();
  });

  test('should show email', () => {
    render(<Card {...cardProps} />);

    expect(screen.getByText('jamal@hotmail.com')).toBeInTheDocument();
  });

  test('should show image with correct src', () => {
    render(<Card {...cardProps} />);

    expect(screen.getByAltText('golden retriever dog pic').src).toBe(
      cardProps.image.url
    );
  });

  test('should show outlined heart', () => {
    render(<Card {...cardProps} />);

    const outlinedFavoriteImage = screen.getByAltText(/outlined heart/i);

    expect(outlinedFavoriteImage).toBeInTheDocument();
  });

  test('should show filled heart when heart icon gets clicked', () => {
    render(<Card {...cardProps} favorite={true} />);

    const outlinedFavoriteImage = screen.queryByAltText(/outlined heart/i);
    const filledFavoriteImage = screen.getByAltText(/filled heart/i);

    expect(outlinedFavoriteImage).not.toBeInTheDocument();
    expect(filledFavoriteImage).toBeInTheDocument();
  });

  test('should toggle when button is clicked', () => {
    render(<Card {...cardProps} />); // Starts as no favorite

    const outlinedFavoriteImage = screen.getByAltText(/outlined heart/i);
    const filledFavoriteImage = screen.queryByAltText(/filled heart/i);

    expect(outlinedFavoriteImage).toBeInTheDocument();
    expect(filledFavoriteImage).not.toBeInTheDocument();

    userEvent.click(screen.getByRole('button')); // Gets favorite

    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();

    userEvent.click(screen.getByRole('button')); // Gets no favorite

    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
  });
});
