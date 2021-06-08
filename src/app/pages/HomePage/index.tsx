import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Statistic,
  Card,
  Row,
  Col,
  Space,
  List,
  Button,
  Steps,
  Timeline,
} from 'antd';
import {
  ClockCircleOutlined,
  UserOutlined,
  ShoppingOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Bar, Gauge, Line, Pie } from '@ant-design/charts';
import { LineConfig } from '@ant-design/charts/es/line';
import { PieConfig } from '@ant-design/charts/es/pie';
import { GaugeConfig } from '@ant-design/charts/es/gauge';
import { BarConfig } from '@ant-design/charts/es/bar';

export function HomePage() {
  const { Step } = Steps;
  const data = [
    { month: 'Jan', type: 'Cans', value: 3 },
    { month: 'Feb', type: 'Cans', value: 4 },
    { month: 'Mar', type: 'Cans', value: 3 },
    { month: 'Apr', type: 'Cans', value: 5 },
    { month: 'May', type: 'Cans', value: 4 },
    { month: 'Jun', type: 'Cans', value: 6 },
    { month: 'Jul', type: 'Cans', value: 7 },
    { month: 'Aug', type: 'Cans', value: 9 },
    { month: 'Sep', type: 'Cans', value: 13 },

    { month: 'Jan', type: 'Boxes', value: 1 },
    { month: 'Feb', type: 'Boxes', value: 2 },
    { month: 'Mar', type: 'Boxes', value: 4 },
    { month: 'Apr', type: 'Boxes', value: 4 },
    { month: 'May', type: 'Boxes', value: 8 },
    { month: 'Jun', type: 'Boxes', value: 9 },
    { month: 'Jul', type: 'Boxes', value: 13 },
    { month: 'Aug', type: 'Boxes', value: 14 },
    { month: 'Sep', type: 'Boxes', value: 14 },
  ];

  const lineConfig: LineConfig = {
    data,
    height: 300,
    xField: 'month',
    yField: 'value',
    seriesField: 'type',
    point: {
      size: 5,
      shape: 'diamond',
    },
    legend: { position: 'right' },
  };

  const pieData = [
    { type: 'iOS', value: 50 },
    { type: 'Android', value: 150 },
    { type: 'Desktop', value: 300 },
    { type: 'Smart Fridge', value: 1 },
  ];

  const pieConfig: PieConfig = {
    appendPadding: 10,
    data: pieData,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.65,
    label: {
      type: 'inner',
      offset: '-50%',
      style: { textAlign: 'center' },
      autoRotate: false,
      content: '{value}',
    },
    statistic: {
      title: false,
      content: {
        formatter: function formatter() {
          return 'Users';
        },
      },
    },
  };

  const listItems = ['Button 1', 'Button 2', 'Button 3', 'Button 4'];

  const gaugeConfig: GaugeConfig = {
    percent: 0.5,
    range: { color: '#62DAAB' },
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    indicator: false,
    statistic: {
      content: {
        formatter: function () {
          return '50%';
        },
      },
    },
  };

  const barData = [
    { version: '1.5.1', value: 250 },
    { version: '1.4.3', value: 200 },
    { version: '1.3.4', value: 100 },
    { version: '1.3.1', value: 50 },
    { version: '1.0.3', value: 12 },
  ];

  const barConfig: BarConfig = {
    data: barData,
    xField: 'value',
    yField: 'version',
    seriesField: 'version',
  };

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Space direction="vertical">
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Card>
              <Statistic
                title="Total Users"
                value={567}
                prefix={<UserOutlined />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Average Session"
                value={15.36}
                precision={2}
                prefix={<ClockCircleOutlined />}
                suffix="min(s)"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Items Sold"
                value={2316}
                prefix={<ShoppingOutlined />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Sales"
                value={27792.56}
                precision={2}
                prefix="$"
              />
            </Card>
          </Col>
          <Col span={24}>
            <Card title="Sales">
              <Line {...lineConfig} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Users by Device">
              <Pie {...pieConfig} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Users by App Version">
              <Bar {...barConfig} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Quick Settings">
              <Row>
                <Col span={12}>
                  <List
                    dataSource={listItems}
                    size="small"
                    renderItem={item => (
                      <List.Item>
                        <Button type="text" icon={<SearchOutlined />}>
                          {item}
                        </Button>
                      </List.Item>
                    )}
                  ></List>
                </Col>
                <Col span={12}>
                  <Gauge {...gaugeConfig} />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Recent Purchases">
              <Timeline>
                <Timeline.Item>
                  <p>Box! 01/01/2021 12:34:56 PM</p>
                  <p>Box description</p>
                </Timeline.Item>
                <Timeline.Item>
                  <p>Box! 01/01/2021 12:34:56 PM</p>
                  <p>Box description</p>
                </Timeline.Item>
                <Timeline.Item>
                  <p>Can? 01/01/2021 12:34:56 PM</p>
                  <p>Box description</p>
                </Timeline.Item>
              </Timeline>
            </Card>
          </Col>
        </Row>
      </Space>
    </>
  );
}
