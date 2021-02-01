import React from 'react';

import './app.scss';



import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { lazy, Suspense } from 'react';

import { Button } from 'antd';



const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


import Dashboard from '../pages/dashboard/dashboard';
import Users from '../pages/contact-us/contact-us';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  return (
    <>
        <Router>
          <Layout>
            <Header className="header">
             
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><Link to="/">  <div className="logo" /> </Link></Menu.Item>
                <Menu.Item key="2"><Link to="/contact">Contact us</Link></Menu.Item>

                
              </Menu>
            </Header>

            <Switch>
            <Layout>
              

              <Layout style={{ padding: '0 24px 24px' }}>



                <Content>
                
                  <Route exact path="/">
                    <Dashboard />
                  </Route>
                  <Route path="/contact">
                    <Users />
                  </Route>
                  

                </Content>
              </Layout>

            
            </Layout>
            
           

            </Switch>
        </Layout>
      </Router>
      </>
  );
};

export default App;
