import StramVideoProvider from '@/providers/StreamClientProvider';
import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StramVideoProvider>{children}</StramVideoProvider>
    </main>
  );
};

export default RootLayout;
