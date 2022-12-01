import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { Raleway } from '@next/font/google';
import { SessionProvider } from 'next-auth/react';

import { trpc } from '../utils/trpc';

import '../styles/globals.css';
import { MuggAppProvider } from '../context/context/context';

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });

const MuggApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <MuggAppProvider>
        <div className={`${raleway.variable} font-sans`}>
          <Component {...pageProps} className={raleway.className} />
        </div>
      </MuggAppProvider>
    </SessionProvider>
  );
}

export default trpc.withTRPC(MuggApp)
