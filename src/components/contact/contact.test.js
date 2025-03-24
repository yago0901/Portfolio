import { render, screen } from '@testing-library/react';
import Contact from './contact';

describe('Contact Component', () => {
  it('should display links github, linkedin and whats', async() => {
    render(<Contact />);

      const Git = await screen.findByTestId('github');
      const Whats = await screen.findByTestId('whatsapp');
      const Linkedin = await screen.findByTestId('linkedin');
      
      expect(Git).toBeInTheDocument();
      expect(Whats).toBeInTheDocument();
      expect(Linkedin).toBeInTheDocument();
  });
});
