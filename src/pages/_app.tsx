import { type AppType } from "next/app";
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { trpc } from '../utils/trpc';
import '../styles/globals.css';
import { MuggAppProvider } from '../context/context/context';
import { Header } from '../components/organisms/header/header';
import { Footer } from '../components/molecules/footer/footer';
import { AppWrapper } from '../components/molecules/app-wrapper/app-wrapper';

const MuggApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <MuggAppProvider>
        <AppWrapper>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </AppWrapper>
      </MuggAppProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MuggApp)
