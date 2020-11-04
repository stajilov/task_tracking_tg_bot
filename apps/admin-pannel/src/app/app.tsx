import React from 'react';

import './app.scss';


import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { lazy, Suspense } from 'react';

import { Button } from 'antd';



const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from '../pages/dashboard/dashboard';
import Users from '../pages/users/users';
import Tasks from '../pages/tasks/tasks';
import Login from '../pages/login/login';

class App extends React.Component{

  render() {
      return (
        <>
        <Router>
          <Layout>
            <Header className="header">
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><Link to="/">Dashboard</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/users">Users</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/tasks">Tasks</Link></Menu.Item>
                <Button  type="primary"><Link to="/login">Logout</Link></Button>
              </Menu>
            </Header>

            <Switch>
            <Layout>
              <Sider width={200} className="site-layout-background">
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                    <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>

              <Layout style={{ padding: '0 24px 24px' }}>

                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>

                <Content>
                
                  <Route exact path="/">
                    <Dashboard />
                  </Route>
                  <Route path="/users">
                    <Users />
                  </Route>
                  <Route path="/tasks">
                    <Tasks />
                  </Route>

                </Content>
              </Layout>

              <Route path="/login">
                  <Login />
             </Route>

            </Layout>
            
           

            </Switch>
        </Layout>
      </Router>
      </>
      );
      }
};

export default App;
