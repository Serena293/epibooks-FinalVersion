import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Welcome from '../components/Welcome'; 

describe('Welcome Component', () => {
  test('renders correctly with expected content', () => {
  // carica componente
    render(<Welcome />);

    const alertElement = screen.getByRole('alert');
    expect(alertElement).toBeInTheDocument();
//controlla se il testo esite
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Benvenuti in EpiBooks!');
  });
});
