import { render, screen } from '@testing-library/react';
import { ExampleComponent2 } from './Sidebar';

describe('ExampleComponentTests', () => {
  beforeEach(() => {
    render(<ExampleComponent2 />);
  });

  it('renders without crashing', () => {
    const enterpriseElement = screen.getByText('ExampleComponent2');
    expect(enterpriseElement).toBeInTheDocument();
  });
});
