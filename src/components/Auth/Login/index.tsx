'use client';

import {
  Box,
  Button,
  Loader,
  PasswordInput,
  rem,
  Stack,
  Text,
  TextInput,
  UnstyledButton,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconAt, IconLock } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

import { notification } from '@/components/Notifications';
import { useUserStore } from '@/providers/UserStoreProvider';

import classes from '../Auth.module.scss';

type FormLoginTypes = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const router = useRouter();
  const { setAuthenticated, setLoading, isLoading } = useUserStore((state) => state);
  const iconEmail = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  const iconPassword = <IconLock style={{ width: rem(16), height: rem(16) }} />;

  const form = useForm<FormLoginTypes>({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => {
        if (value === '' || value === null) {
          return 'This field cannot be empty';
        }
        const emailRegex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(value)) {
          return 'Invalid email';
        }
        return '';
      },
      password: (value) => {
        if (value === '' || value === null) {
          return 'This field cannot be empty';
        }
        if (value.length < 7) {
          return 'Password must have at least 7 characters.';
        }
        return '';
      },
    },
  });

  const handleSubmitForm = async (values: FormLoginTypes) => {
    const checkValidate = !form.validate()?.errors?.email && !form.validate()?.errors?.password;

    if (checkValidate) {
      setLoading(true);

      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        const result = await response.json();

        setLoading(false);

        if (result && result.success) {
          notification.success({
            title: 'Success',
            message: 'Login successfully',
          });

          // Update Zustand store
          // setUser(result.user);
          setAuthenticated(true);

          router.push('/');
        }
        if (result && result.error) {
          notification.error({
            title: 'Error',
            message: result.error,
          });
        }
      } catch (error: any) {
        notification.error({
          title: 'Error',
          message: error.message || 'Something went wrong',
        });

        setLoading(false);
      }
    }
  };
  return (
    <Box>
      <form
        onSubmit={form.onSubmit(
          (_values, _event) => {},
          (_validationErrors, _values, _event) => {
            handleSubmitForm(_values);
          },
        )}
      >
        <TextInput
          classNames={{ input: classes.input, label: classes.label }}
          leftSectionPointerEvents="none"
          leftSection={iconEmail}
          disabled={isLoading}
          size="md"
          mb={20}
          label="Email"
          withAsterisk
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />
        <PasswordInput
          classNames={{ input: classes.input, label: classes.label }}
          leftSectionPointerEvents="none"
          leftSection={iconPassword}
          disabled={isLoading}
          size="md"
          mb={30}
          label="Mật khẩu"
          withAsterisk
          placeholder="********"
          {...form.getInputProps('password')}
        />

        <Stack align="center" gap={30}>
          <Button type="submit" w="60%" className={classes.submit} disabled={isLoading}>
            {isLoading ? <Loader color="#000" size="sm" /> : 'Login'}
          </Button>

          <Text fz={14}>
            Don&apos;t have an account?{' '}
            <UnstyledButton component={Link} href="/signup" fz={14} className={classes.button}>
              Sign up
            </UnstyledButton>
          </Text>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
