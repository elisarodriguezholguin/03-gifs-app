import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi, beforeEach, afterEach } from "vitest";
import { SearchBar } from "./SearchBar";

describe('SearchBar', () => {

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  test('should render search correctly', () => {
    render(<SearchBar onQuery={vi.fn()} />);

    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByRole('button', { name: 'Buscar' })).toBeDefined();
  });

  test('should call onQuery with the correct value after debounce', () => {
    const onQuery = vi.fn();
    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });

    vi.advanceTimersByTime(600);

    expect(onQuery).toHaveBeenCalledTimes(1);
    expect(onQuery).toHaveBeenCalledWith('test');
  });

  test('should call only once with the last value (debounce)', () => {
    const onQuery = vi.fn();
    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 't' } });
    fireEvent.change(input, { target: { value: 'te' } });
    fireEvent.change(input, { target: { value: 'tes' } });
    fireEvent.change(input, { target: { value: 'test' } });

    vi.advanceTimersByTime(600);

    expect(onQuery).toHaveBeenCalledTimes(1);
    expect(onQuery).toHaveBeenCalledWith('test');
  });

  test('should call onQuery when button clicked with the input value', () => {
    const onQuery = vi.fn();
    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onQuery).toHaveBeenCalledTimes(1);
    expect(onQuery).toHaveBeenCalledWith('test');
  });

  test('should the input has the correct placeholder value', () => {
    const value = 'Buscar gif';
    render(<SearchBar onQuery={vi.fn()} placeholder={value} />);

    expect(screen.getByPlaceholderText(value)).toBeDefined();
  });

});
