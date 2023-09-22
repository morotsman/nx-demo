import { render } from '@testing-library/react';

import ButtonLibrary from './button-library';

describe('ButtonLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
