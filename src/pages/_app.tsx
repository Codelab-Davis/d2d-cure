import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { UserProvider } from '@/components/UserProvider';
import AuthStateListener from '@/components/AuthStateListener';
import "../app/globals.css"; 
import {NextUIProvider} from "@nextui-org/react";


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <NextUIProvider>
    <UserProvider>
      <AuthStateListener />
      <Component {...pageProps} />
    </UserProvider>
    </NextUIProvider>
  );
}

export default MyApp;