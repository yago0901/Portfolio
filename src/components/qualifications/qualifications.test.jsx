import { render, screen } from '@testing-library/react';
import Qualifications from './qualifications';

describe('Qualifications Component', () => {
  it('should display slides 1 to 10', async() => {
    render(<Qualifications />);

    for (let i = 1; i <= 10; i++) {
      const slideElement = await screen.findByTestId(`slide${i}`);
      
      expect(slideElement).toBeInTheDocument();
    }
  });
});
