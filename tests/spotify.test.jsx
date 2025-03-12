import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react';
import App from '../src/App';


/* test('renders name', async () => {
  const { getByText, getByRole } = render(<HelloWorld name="Vitest" />)

  await expect.element(getByText('Hello Vitest x1!')).toBeInTheDocument()
  await getByRole('button', { name: 'Increment '}).click()

  await expect.element(getByText('Hello Vitest x2!')).toBeInTheDocument()
}) */

test('renders Spotify iframe with the correct artistId', () => {
    const artistId = '4YCL2HISYkUON4kUpWnt06'; // Example artist ID
    
    // Render the component
    render(<App/>);
    
    // Get the iframe element
    const iframe = screen.getByTitle('Spotify iframe');
    
    // Check if the iframe src contains the correct artistId
    expect(iframe.getAttribute('src')).toContain(artistId);
});
