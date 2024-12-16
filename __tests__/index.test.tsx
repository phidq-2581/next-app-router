/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';

import HomePage from '@/app/home/page';
const { expect, describe, it } = require('@jest/globals');

describe('Home', () => {
  it('renders a heading', () => {
    render(<HomePage />);

    const titleElement = screen.getByText('title');
    expect(titleElement).toBeInTheDocument();
  });
});
