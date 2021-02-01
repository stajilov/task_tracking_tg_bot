import React from 'react';
import { render } from '@testing-library/react';

import LeadForm from './lead-form';

describe('LeadForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LeadForm />);
    expect(baseElement).toBeTruthy();
  });
});
