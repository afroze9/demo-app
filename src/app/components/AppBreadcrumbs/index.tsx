/**
 *
 * AppBreadcrumbs
 *
 */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

import { Breadcrumb } from 'antd';

interface Props {}

export function AppBreadcrumbs(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <div>
      {t('')}
      {
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
      }
    </div>
  );
}
