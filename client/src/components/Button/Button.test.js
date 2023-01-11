import { render } from '@testing-library/react';
import Button from './Button';
// eslint-disable-next-line no-undef
describe('Button snapshot testing', () => {
  // eslint-disable-next-line no-undef
  test('should Button match snapshot', () => {
    const { asFragment } = render(<Button />);
    // eslint-disable-next-line no-undef
    expect(asFragment()).toMatchSnapshot();
  });
});
