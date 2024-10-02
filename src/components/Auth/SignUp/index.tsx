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

export type FormSignupTypes = {
  email: string;
  password: string;
  comfirmpassword: string;
};

const SignUp: React.FC = () => {
  const router = useRouter();
  const { setLoading, isLoading } = useUserStore((state) => state);

  const iconEmail = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  const iconPassword = <IconLock style={{ width: rem(16), height: rem(16) }} />;

  const form = useForm<FormSignupTypes>({
    initialValues: {
      email: '',
      password: '',
      comfirmpassword: '',
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
      comfirmpassword: (value, values) => {
        if (value === '' || value === null) {
          return 'This field cannot be empty';
        }
        if (value !== values.password) {
          return 'Password does not match';
        }
        return '';
      },
    },
  });

  const handleSubmitForm = async (values: FormSignupTypes) => {
    const checkValidate =
      !form.validate()?.errors?.email &&
      !form.validate()?.errors?.password &&
      !form.validate()?.errors?.comfirmpassword;

    if (checkValidate) {
      const { email, password } = values;
      const payload = { email, password };

      setLoading(true);

      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        const result = await response.json();

        setLoading(false);

        if (result && result.success) {
          notification.success({
            title: 'Success',
            message: 'Signup successfully',
          });

          form.reset();
          router.push('/login');
        }

        if (result && result.error) {
          notification.error({
            title: 'Error',
            message: result.error,
          });
          // eslint-disable-next-line no-console
          console.log(result.error);
        }
      } catch (error: any) {
        notification.error({
          title: 'Error',
          message: error.message || 'Something went wrong',
        });
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

        {(['password', 'comfirmpassword'] as Array<keyof FormSignupTypes>).map((field) => (
          <PasswordInput
            key={field}
            classNames={{ input: classes.input, label: classes.label }}
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            leftSectionPointerEvents="none"
            leftSection={iconPassword}
            disabled={isLoading}
            size="md"
            mb={20}
            withAsterisk
            placeholder="********"
            {...form.getInputProps(field)}
          />
        ))}

        <Stack align="center" gap={30}>
          <Button type="submit" w="60%" className={classes.submit} disabled={isLoading}>
            {isLoading ? <Loader color="#000" size="sm" /> : 'Sign Up'}
          </Button>

          <Text fz={14}>
            Already have an account?{' '}
            <UnstyledButton component={Link} href="/login" fz={14} className={classes.button}>
              Login
            </UnstyledButton>
          </Text>
        </Stack>
      </form>
    </Box>
  );
};
export default SignUp;
