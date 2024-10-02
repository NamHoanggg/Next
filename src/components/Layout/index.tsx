'use client';

import { Box, Container, Image } from '@mantine/core';
import { type PropsWithChildren } from 'react';
import React from 'react';

import Header from '../Header';
import Notifications from '../Notifications';
import classes from './Layout.module.scss';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box className={classes.root} pos="relative">
      <Image
        src="/assets/images/home/home_1.png"
        alt="background"
        pos="absolute"
        top={0}
        w="100%"
        h="25%"
        style={{ zIndex: -1 }}
      />
      <Image
        src="/assets/images/home/home_1.png"
        alt="background"
        pos="absolute"
        top={0}
        w="100%"
        h="25%"
        style={{ zIndex: -1 }}
      />
      <Image
        src="/assets/images/home/home_2.png"
        alt="background"
        pos="absolute"
        top={110}
        left={0}
        w="35%"
        h="30%"
        style={{ zIndex: -1 }}
      />
      <Image
        src="/assets/images/home/home_2.png"
        alt="background"
        pos="absolute"
        top={110}
        left={0}
        w="35%"
        h="30%"
        style={{ zIndex: -1 }}
      />
      <Image
        src="/assets/images/home/home_3.png"
        alt="background"
        pos="absolute"
        top={110}
        right={0}
        w="35%"
        h="30%"
        style={{ zIndex: -1 }}
      />
      <Image
        src="/assets/images/home/home_3.png"
        alt="background"
        pos="absolute"
        top={110}
        right={0}
        w="35%"
        h="30%"
        style={{ zIndex: -1 }}
      />
      <Image
        src="/assets/images/home/home.png"
        alt="background"
        pos="absolute"
        w="20%"
        h="15%"
        top={200}
        left={20}
        style={{ zIndex: -1 }}
      />
      <Image
        src="/assets/images/home/home.png"
        alt="background"
        pos="absolute"
        w="20%"
        h="15%"
        top={200}
        right={20}
        style={{ zIndex: -1 }}
      />
      <Image
        src="/assets/images/home/home_4.png"
        alt="background"
        pos="absolute"
        bottom={0}
        left={0}
        w="50%"
        h="30%"
        style={{ zIndex: -1 }}
      />
      <Image
        src="/assets/images/home/home_4.png"
        alt="background"
        pos="absolute"
        bottom={0}
        left={0}
        w="50%"
        h="30%"
        style={{ zIndex: -1 }}
      />
      <Image
        src="/assets/images/home/home_5.png"
        alt="background"
        pos="absolute"
        bottom={0}
        right={0}
        w="50%"
        h="30%"
        style={{ zIndex: -1 }}
      />
      <Image
        src="/assets/images/home/home_5.png"
        alt="background"
        pos="absolute"
        bottom={0}
        right={0}
        w="50%"
        h="30%"
        style={{ zIndex: -1 }}
      />

      <Container p={0} fluid h="100%" className={classes.section}>
        {children}
      </Container>

      <Header />

      <Notifications />
    </Box>
  );
};

export default MainLayout;
