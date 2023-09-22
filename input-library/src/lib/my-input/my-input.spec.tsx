import { render } from '@testing-library/react';

import MyInput from './my-input';

describe('MyInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyInput />);
    expect(baseElement).toBeTruthy();
  });
});
