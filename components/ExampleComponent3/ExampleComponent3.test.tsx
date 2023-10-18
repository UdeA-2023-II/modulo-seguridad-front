import { render, screen } from '@testing-library/react';
import { ExampleComponent3 } from './RecoverAccount';

describe('ExampleComponentTests', () => {
  beforeEach(() => {
    render(<ExampleComponent3 />);
  });

  it('renders without crashing', () => {
    const enterpriseElement = screen.getByText('ExampleComponent2');
    expect(enterpriseElement).toBeInTheDocument();
  });
});