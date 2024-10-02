import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';

import { inter } from '@/theme/fonts';
import { theme } from '@/theme/theme';

export const metadata: Metadata = {
  title: 'Next',
  description: 'Next',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      style={{
        scrollBehavior: 'smooth',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        textRendering: 'optimizeLegibility',
      }}
    >
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/assets/favicon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme} defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
