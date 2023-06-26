import { NextComponentType, NextPageContext } from 'next';
import BaseLayout from '@/components/layout/BaseLayout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

interface CustomAppPros extends AppProps {
  Component: NextComponentType<NextPageContext, any, any> & {
    adminPage?: boolean;
  }; // Add adminPage property
}

export default function App({ Component, pageProps }: CustomAppPros) {
  return (
    <>
      {Component.adminPage ? (
        <Component {...pageProps} />
      ) : (
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      )}
    </>
  );
}
