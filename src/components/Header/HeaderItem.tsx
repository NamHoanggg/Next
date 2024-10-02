'use client';

import { Image, Stack, Text, UnstyledButton } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

import type { IHeaderProps } from '.';
import classes from './Header.module.scss';

const HeaderItem: React.FC<IHeaderProps> = ({ title, href, src, w, h }) => {
  return (
    <UnstyledButton component={Link} href={href}>
      <Stack align="center" justify="flex-end" mah={52} gap={10}>
        <Image src={src} w={w} h={h} alt="link" />
        <Text className={classes.text}>{title}</Text>
      </Stack>
    </UnstyledButton>
  );
};

export default HeaderItem;
