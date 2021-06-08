import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Statistic, Card, Row, Col, Space } from 'antd';
import {
  ClockCircleOutlined,
  UserOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import { Line } from '@ant-design/charts';
import { LineConfig } from '@ant-design/charts/es/line';

export function HomePage() {
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

  const config: LineConfig = {
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
              <Line {...config} />
            </Card>
          </Col>
        </Row>
      </Space>
    </>
  );
}
