'use client';

import { Container, Group } from '@mantine/core';
import React from 'react';

import classes from './Header.module.scss';
import HeaderItem from './HeaderItem';

export interface IHeaderProps {
  title: string;
  href: string;
  src: string;
  w: number;
  h: number;
}

const headerItems: IHeaderProps[] = [
  {
    title: 'Ví',
    href: '/',
    src: '/assets/images/header/header_1.png',
    w: 20,
    h: 20,
  },
  {
    title: 'Đầu tư',
    href: '/ha',
    src: '/assets/images/header/header_2.png',
    w: 20,
    h: 20,
  },
  {
    title: 'For you',
    href: '/',
    src: '/assets/images/header/header_3.png',
    w: 40,
    h: 35,
  },
  {
    title: 'P2P',
    href: '/',
    src: '/assets/images/header/header_4.png',
    w: 20,
    h: 20,
  },
  {
    title: 'Launchpad',
    href: '/',
    src: '/assets/images/header/header_5.png',
    w: 20,
    h: 20,
  },
];

const Header: React.FC = () => {
  return (
    <Container fluid p={0} className={classes.header}>
      <Group justify="space-around" px={20}>
        {headerItems.map((item) => (
          <HeaderItem key={item.title} {...item} />
        ))}
      </Group>
    </Container>
  );
};

export default Header;
