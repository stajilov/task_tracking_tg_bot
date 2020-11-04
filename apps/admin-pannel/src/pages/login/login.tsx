import React from 'react';

import './login.scss';
import { Layout, Menu, Breadcrumb } from 'antd';


/* eslint-disable-next-line */
export interface LoginProps {}

export class Login extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <h1>Welcome to login!</h1>
        </div>
      </Layout>
    );
  }
};

export default Login;
