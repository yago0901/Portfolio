import { render, screen } from '@testing-library/react';
import Members from './members';

describe('Members Component', () => {
  it('should display members 1 to 4', async() => {
    render(<Members />);

    for (let i = 1; i <= 4; i++) {
      const memberElement = await screen.findByTestId(`member-${i}`);
      expect(memberElement).toBeInTheDocument();
    }
  });

});

