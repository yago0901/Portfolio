import { render, screen } from '@testing-library/react'
import WebContent from './app'

describe('Jest', () => {
  it('shoul work', () => {
    expect(1).toBe(1);
  })
  it('should display elemnts', () => {
    render(<WebContent/>)

    screen.debug()
  });
})