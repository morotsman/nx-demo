import { render } from '@testing-library/react';

import MyButton from './my-button';

describe('MyButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyButton title="A title"/>);
    expect(baseElement).toBeTruthy();
  });
});
