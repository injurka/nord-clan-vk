import { render, screen } from '@testing-library/react';

import Index from '#/pages/index';

//* - TEST ------------------------------------------------------------------------ *//

describe('Index', () => {
  it('renders a heading', () => {
    render(<Index />);

    const main = screen.getByRole('div');

    expect(main).toBeTruthy();
  });
});
