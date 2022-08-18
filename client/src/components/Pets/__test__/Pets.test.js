import { render, screen } from '@testing-library/react';
import { Pets } from '../Pets';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { pets } from '../../../mock';
import userEvent from '@testing-library/user-event';

const server = setupServer(
  rest.get('http://localhost:4000/pets', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(pets));
  })
);
beforeEach(() => {
  render(<Pets />);
});
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Pets', () => {
  test('should render 3 card components', async () => {
    const cards = await screen.findAllByRole('article');
    expect(cards.length).toBe(3);
  });

  test('should filter male cards when select male option', async () => {
    const cards = await screen.findAllByRole('article');
    userEvent.selectOptions(screen.getByLabelText(/gender status/i), 'male');
    const maleCards = screen.getAllByRole('article');
    // console.log(cards[1]);
    expect(maleCards).toStrictEqual([cards[1]]);
  });
});
