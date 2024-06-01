import React from 'react';
import { render } from '@testing-library/react';
import Home from './index';

window.matchMedia = window.matchMedia || function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
  

describe('Home Component', () => {
  test('renders without crashing', () => {
    render(<Home />);
  });

  test('displays correct title', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Vostorg')).toBeInTheDocument();
  });

  test('displays correct about paragraph', () => {
    const { getByText } = render(<Home />);
    expect(getByText('О нас')).toBeInTheDocument();
  });

  test('displays correct assortment title', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Наш ассортимент:')).toBeInTheDocument();
  });

  test('displays correct services title', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Услуги:')).toBeInTheDocument();
  });

  // Add more tests for styling, image loading, etc. as needed
});
