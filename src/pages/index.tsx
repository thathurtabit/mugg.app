import { type NextPage } from "next";
import Head from 'next/head'

import { trpc } from '../utils/trpc'
import { AuthProviders } from '../components/organisms/auth-providers/auth-providers'
import { PageHeader } from '../components/atoms/page-header/page-header'
import { settings } from '../settings/constants'
import { Footer } from '../components/molecules/footer/footer';
import { PageWrapper } from '../components/molecules/page-wrapper/page-wrapper';
import { PageMain } from '../components/molecules/page-main/page-main';
import { PageContent } from '../components/molecules/page-content/page-content';

const Home: NextPage = () => {
  const { data: helloData = { greeting: 'Loading...' } } =
    trpc.public.hello.useQuery({ text: 'from tRPC' });

  return (
    <PageWrapper>
      <Head>
        <title>{settings.appName}</title>
        <meta name="description" content={settings.appDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageMain>
        <PageContent>
          <PageHeader text={settings.appName} />
          <div className="text-white">{helloData.greeting}</div>
          <div className="flex flex-col items-center gap-2">
            <AuthProviders />
          </div>
        </PageContent>
      </PageMain>
      <Footer />
    </PageWrapper>
  );
};

export default Home