import React from 'react';
import { render } from '@testing-library/react';

import ContactUs from './contact-us';

describe('ContactUs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactUs />);
    expect(baseElement).toBeTruthy();
  });
});
