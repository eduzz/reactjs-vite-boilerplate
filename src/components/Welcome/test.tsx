import Welcome from '@/components/Welcome';
import { render, screen } from '@/helpers/tests';

describe('<Welcome />', () => {
  it('should render the Welcome', () => {
    const { container } = render(<Welcome to='App name' />);

    expect(screen.getByText(/welcome to/i)).toBeInTheDocument();
    expect(screen.getByText(/app name/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /click me/i
      })
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
