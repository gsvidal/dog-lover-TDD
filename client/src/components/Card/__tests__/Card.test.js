import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PetsProvider } from '../../../context/PetsContext';
import { Card } from '../Card';
import { pets } from '../../../mock';

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
  index: 0,
};

const renderCardComponentWithProvider = (props) => {
  render(
    <PetsProvider>
      <Card {...props} />
    </PetsProvider>
  );
};

describe('Card', () => {
  test('should show pet name', () => {
    renderCardComponentWithProvider(cardProps);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('should show phone number', () => {
    renderCardComponentWithProvider(cardProps);

    expect(screen.getByText('111-111-1111')).toBeInTheDocument();
  });

  test('should show email', () => {
    renderCardComponentWithProvider(cardProps);

    expect(screen.getByText('jamal@hotmail.com')).toBeInTheDocument();
  });

  test('should show image with correct src', () => {
    renderCardComponentWithProvider(cardProps);

    expect(screen.getByAltText('golden retriever dog pic').src).toBe(
      cardProps.image.url
    );
  });

  test('should show outlined heart', () => {
    renderCardComponentWithProvider(cardProps);

    const outlinedFavoriteImage = screen.getByAltText(/outlined heart/i);

    expect(outlinedFavoriteImage).toBeInTheDocument();
  });

  test('should show filled heart ', () => {
    renderCardComponentWithProvider({ ...cardProps, favorite: true });

    const outlinedFavoriteImage = screen.queryByAltText(/outlined heart/i);
    const filledFavoriteImage = screen.getByAltText(/filled heart/i);

    expect(outlinedFavoriteImage).not.toBeInTheDocument();
    expect(filledFavoriteImage).toBeInTheDocument();
  });

  test('should toggle when button is clicked', async () => {
    renderCardComponentWithProvider({ ...cardProps, filteredPets: [...pets] });
    // Starts as no favorite
    userEvent.click(screen.getByRole('button')); // Gets favorite
    console.log(screen.getByRole('button').firstElementChild.alt);

    expect(await screen.findByAltText(/filled heart/i)).toBeInTheDocument();
    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
    // userEvent.click(screen.getByRole('button')); // Gets no favorite
    // expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
    // expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
  });
});
