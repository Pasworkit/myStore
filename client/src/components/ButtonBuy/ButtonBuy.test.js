import { render } from '@testing-library/react';
import ButtonBuy from './ButtonBuy';
// eslint-disable-next-line no-undef
describe('ButtonBuy snapshot testing', () => {
  // eslint-disable-next-line no-undef
  test('should ButtonBuy match snapshot', () => {
    const { asFragment } = render(<ButtonBuy text="some text" />);
    // eslint-disable-next-line no-undef
    expect(asFragment()).toMatchSnapshot();
  });
});
