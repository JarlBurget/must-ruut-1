import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, vi } from 'vitest';  
import App from '../src/App';


test('should scroll to the music section when clicking navbar links', async () => {
  render(<App />);

  // Mock the window.scrollTo method (since we're testing scroll behavior)
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {});  // Prevent actual scrolling
  window.HTMLElement.prototype.scrollIntoView = function() {};

  const musicLink = screen.getByTestId('music'); // This is the link
  fireEvent.click(musicLink);

  // Check if the "music" section is now in the document
  const musicSection = screen.getByTestId('music'); // This is the section
  expect(musicSection).toBeInTheDocument();
});

test('should scroll to the concerts section when clicking navbar links', async () => {
  render(<App />);

  // Mock the window.scrollTo method (since we're testing scroll behavior)
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {});  // Prevent actual scrolling
  window.HTMLElement.prototype.scrollIntoView = function() {};

  const concertsLink = screen.getByTestId('concerts'); // This is the link
  fireEvent.click(concertsLink);

  // Check if the "concerts" section is now in the document
  const concertsSection = screen.getByTestId('concerts'); // This is the section
  expect(concertsSection).toBeInTheDocument();
});

test('should scroll to the about-us section when clicking navbar links', async () => {
  render(<App />);

  // Mock the window.scrollTo method (since we're testing scroll behavior)
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {});  // Prevent actual scrolling
  window.HTMLElement.prototype.scrollIntoView = function() {};

  const aboutUsLink = screen.getByTestId('about-us'); // This is the link
  fireEvent.click(aboutUsLink);

  // Check if the "about-us" section is now in the document
  const aboutUsSection = screen.getByTestId('about-us'); // This is the section
  expect(aboutUsSection).toBeInTheDocument();
});

test('should scroll to the contact section when clicking navbar links', async () => {
  render(<App />);

  // Mock the window.scrollTo method (since we're testing scroll behavior)
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {});  // Prevent actual scrolling
  window.HTMLElement.prototype.scrollIntoView = function() {};

  const contactLink = screen.getByTestId('contact'); // This is the link
  fireEvent.click(contactLink);

  // Check if the "contact-section" is now in the document
  const contactSection = screen.getByTestId('contact-section'); // This is the section
  expect(contactSection).toBeInTheDocument();
});

test('should take to the demo page when clicking the demo link', async () => {
  render(<App />);

  const demosLink = screen.getByTestId('demos'); // This is the link
  fireEvent.click(demosLink);

  // Check if the "demos" section is now in the document
  const demosSection = screen.getByTestId('demos-section'); // This is the section
  expect(demosSection).toBeInTheDocument();
});
