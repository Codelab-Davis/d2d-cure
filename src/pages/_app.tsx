import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { UserProvider } from '@/components/UserProvider';
import AuthStateListener from '@/components/AuthStateListener';
import "../app/globals.css"; 


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <UserProvider>
      <AuthStateListener />
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;