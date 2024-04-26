import StramVideoProvider from '@/providers/StreamClientProvider';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Yoom',
  description: 'Video Calling App',
  icons: {
    icon: '/icons/logo.svg',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StramVideoProvider>{children}</StramVideoProvider>
    </main>
  );
};

export default RootLayout;
