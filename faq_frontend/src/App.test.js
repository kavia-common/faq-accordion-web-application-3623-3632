import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders FAQs title and toggles an item to show its answer', async () => {
  render(<App />);

  // Title renders
  expect(screen.getByRole('heading', { name: /faqs/i })).toBeInTheDocument();

  // Find a known question from the dataset
  const q = screen.getByRole('button', { name: /what is an accordion component\?/i });
  expect(q).toBeInTheDocument();

  // Initially answer is not visible
  expect(screen.queryByText(/An accordion is a vertically stacked list/i)).not.toBeInTheDocument();

  // Click to open
  fireEvent.click(q);

  // Now the answer should appear
  expect(await screen.findByText(/An accordion is a vertically stacked list/i)).toBeInTheDocument();
});
