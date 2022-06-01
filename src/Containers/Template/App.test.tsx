import React from 'react';
import { render, screen } from '@testing-library/react';
import { Template } from '.';
import '@testing-library/jest-dom'

test('render App component', () => {
  render(<Template />);
  const Element = screen.getByText('Template');
  expect(Element).toBeInTheDocument();
});
