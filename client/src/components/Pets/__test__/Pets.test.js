import { render, screen, within } from '@testing-library/react';
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
  test('should render 4 card components', async () => {
    const cards = await screen.findAllByRole('article');
    expect(cards.length).toBe(4);
  });

  test('should filter male cards when select male option', async () => {
    const cards = await screen.findAllByRole('article');
    userEvent.selectOptions(screen.getByLabelText(/gender status/i), 'male');
    const maleCards = screen.getAllByRole('article');
    expect(maleCards).toStrictEqual([cards[1], cards[3]]);
  });

  test('should filter female cards when select female option', async () => {
    const cards = await screen.findAllByRole('article');
    userEvent.selectOptions(screen.getByLabelText(/gender status/i), 'female');
    const femaleCards = screen.getAllByRole('article');
    expect(femaleCards).toStrictEqual([cards[0], cards[2]]);
  });

  test('should filter favorite cards when select favorite option', async () => {
    const cards = await screen.findAllByRole('article');
    userEvent.click(within(cards[2]).getByRole('button'));
    userEvent.selectOptions(
      screen.getByLabelText(/favorite status/i),
      'favorite'
    );
    expect(screen.getAllByRole('article')).toStrictEqual([cards[2]]);
  });

  test('should filter no favorite cards when select no favorite option', async () => {
    const cards = await screen.findAllByRole('article');
    userEvent.click(within(cards[0]).getByRole('button'));
    userEvent.selectOptions(
      screen.getByLabelText(/favorite status/i),
      'no favorite'
    );
    expect(screen.getAllByRole('article')).toStrictEqual([
      cards[1],
      cards[2],
      cards[3],
    ]);
  });

  test('should filter for favorite and male cards', async () => {
    const cards = await screen.findAllByRole('article');
    userEvent.click(within(cards[1]).getByRole('button'));
    userEvent.selectOptions(
      screen.getByLabelText(/favorite status/i),
      'favorite'
    );
    userEvent.selectOptions(screen.getByLabelText(/gender status/i), 'male');
    expect(screen.getAllByRole('article')).toStrictEqual([cards[1]]);
  });
});
