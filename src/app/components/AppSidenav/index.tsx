/**
 *
 * AppSidenav
 *
 */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Menu } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  HomeOutlined,
  DashboardOutlined,
} from '@ant-design/icons';

interface Props {}

export function AppSidenav(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const { SubMenu } = Menu;

  return (
    <>
      {
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {/* Todo: replace with nav provider */}
          <SubMenu key="sub1" icon={<HomeOutlined />} title="Home">
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              Dashboard 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DashboardOutlined />}>
              Dashboard 2
            </Menu.Item>
            <Menu.Item key="3" icon={<DashboardOutlined />}>
              Dashboard 3
            </Menu.Item>
            <Menu.Item key="4" icon={<DashboardOutlined />}>
              Dashboard 4
            </Menu.Item>
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
      }
    </>
  );
}
