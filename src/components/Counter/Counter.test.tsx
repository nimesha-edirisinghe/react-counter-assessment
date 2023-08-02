import { render, fireEvent, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter component', () => {
  test('renders initial count as 0', () => {
    render(<Counter />);
    const countText = screen.getByTestId('count-text');
    expect(countText).toHaveTextContent('Count: 0');
  });

  test('increases the count when the "+" button is clicked', () => {
    render(<Counter />);
    const increaseButton = screen.getByTestId('increase-button');
    fireEvent.click(increaseButton);
    const countText = screen.getByTestId('count-text');
    expect(countText).toHaveTextContent('Count: 1');
  });

  test('resets the count to 0 when the "Reset" button is clicked', () => {
    render(<Counter />);
    const increaseButton = screen.getByTestId('increase-button');
    const resetButton = screen.getByTestId('reset-button');
    // Increase the count to 5
    for (let i = 0; i < 5; i++) {
      fireEvent.click(increaseButton);
    }
    fireEvent.click(resetButton);
    const countText = screen.getByTestId('count-text');
    expect(countText).toHaveTextContent('Count: 0');
  });

  test('does not increase the count beyond the maximum limit of 10', () => {
    render(<Counter />);
    const increaseButton = screen.getByTestId('increase-button');

    // Mock the window.alert method
    window.alert = jest.fn();

    // Click the "+" button 11 times
    for (let i = 0; i < 11; i++) {
      fireEvent.click(increaseButton);
    }

    // Check that the count does not exceed 10
    const countText = screen.getByTestId('count-text');
    expect(countText).toHaveTextContent('Count: 10');

    // Check that the alert message is displayed
    expect(window.alert).toHaveBeenCalledWith("Count can't be more than 10");
  });

  test('does not decrease the count below 0', () => {
    render(<Counter />);
    const decreaseButton = screen.getByTestId('decrease-button');

    // Use jest.spyOn to mock the window.alert method
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Click the "-" button until the count reaches -1
    for (let i = 0; i < 11; i++) {
      fireEvent.click(decreaseButton);
    }

    // Check that the count does not go below 0
    const countText = screen.getByTestId('count-text');
    expect(countText).toHaveTextContent('Count: 0');

    // Check that the alert message is displayed
    expect(alertMock).toHaveBeenCalledWith("Count can't be less than 0");

    // Restore the original window.alert method
    alertMock.mockRestore();
  });
});
