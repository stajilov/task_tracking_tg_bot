import React, { Component } from 'react';
import LeadForm from '../../ui-components/lead-form/lead-form';

import './dashboard.scss';

/* eslint-disable-next-line */
export interface DashboardProps {}

export class Dashboard extends Component<DashboardProps> {
  render() {
    return (
      <div>
        <LeadForm />
      </div>
    );
  }
}

export default Dashboard;
