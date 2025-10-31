import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('adds a task', () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText(/add task/i), {
    target: { value: 'Test Task' }
  });
  fireEvent.click(screen.getByText(/add/i));
  expect(screen.getByText('Test Task')).toBeInTheDocument();
});

test('toggles task completion', () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText(/add task/i), {
    target: { value: 'Toggle Task' }
  });
  fireEvent.click(screen.getByText(/add/i));
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(checkbox.checked).toBe(true);
});

test('deletes a task', () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText(/add task/i), {
    target: { value: 'Delete Me' }
  });
  fireEvent.click(screen.getByText(/add/i));
  const deleteButton = screen.getByRole('button', { name: 'Delete' });
  fireEvent.click(deleteButton);
  expect(screen.queryByText('Delete Me')).not.toBeInTheDocument();
});