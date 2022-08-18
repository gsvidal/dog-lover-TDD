import { render, screen } from '@testing-library/react';
import { Pets } from '../Pets';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { pets } from '../../../mock';

const server = setupServer(
  rest.get('http://localhost:4000/pets', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(pets));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Pets', () => {
  test('should render 3 card components', async () => {
    render(<Pets />);
    const cards = await screen.findAllByRole('article');
    expect(cards.length).toBe(3);
  });
});
