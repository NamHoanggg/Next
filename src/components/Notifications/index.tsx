import type { NotificationData } from '@mantine/notifications';
import { Notifications as NotificationProvider, notifications } from '@mantine/notifications';
import { IconAlertTriangleFilled, IconCheck, IconX } from '@tabler/icons-react';
import React from 'react';

import classes from './Notification.module.scss';

const error = (props: NotificationData) =>
  notifications.show({
    ...props,
    color: 'red',
    icon: <IconX />,
    classNames: classes,
  });

const success = (props: NotificationData) =>
  notifications.show({
    ...props,
    color: 'green',
    icon: <IconCheck />,
    classNames: classes,
  });

const info = (props: NotificationData) =>
  notifications.show({
    ...props,
    color: 'blue',
    icon: <IconCheck />,
    classNames: classes,
  });

const warning = (props: NotificationData) =>
  notifications.show({
    ...props,
    color: 'yellow',
    icon: <IconAlertTriangleFilled />,
    classNames: classes,
  });

export const notification = {
  error,
  success,
  info,
  warning,
  ...notifications,
};

const Notifications: React.FC = () => (
  <NotificationProvider containerWidth={360} position="top-right" translate="yes" />
);
export default Notifications;
