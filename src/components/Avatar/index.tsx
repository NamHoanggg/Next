import type { AvatarProps } from '@mantine/core';
import { Avatar } from '@mantine/core';
import React from 'react';

import { useUserStore } from '@/providers/UserStoreProvider';

interface MyAvatarProps extends AvatarProps {}

const AvatarUser: React.FC<MyAvatarProps> = ({ src, ...props }) => {
  const { user } = useUserStore((state) => state);

  return src ? (
    <Avatar src={src} {...props} />
  ) : (
    <Avatar color="cyan" radius="xl">
      {user?.email ? user?.email.slice(0, 1).toUpperCase() : 'M'}
    </Avatar>
  );
};

export default AvatarUser;
