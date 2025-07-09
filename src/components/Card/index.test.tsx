import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './index';

describe('Card', () => {
  it('renders title and children', () => {
    render(
      <Card title="Test Card">
        <span>Card Content</span>
      </Card>,
    );
    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('applies background image if provided', () => {
    render(
      <Card title="With BG" backgroundImage="test.jpg">
        <span>BG Content</span>
      </Card>,
    );
    const imageSection = screen.getByText('With BG').parentElement
      ?.previousSibling as HTMLElement;
    expect(imageSection).toHaveStyle('background-image: url(test.jpg)');
  });
});
