import { type NextPage } from "next";
import Head from 'next/head'

import { trpc } from '../utils/trpc';
import { PageHeader } from '../components/atoms/page-header/page-header';
import { settings } from '../settings/constants';
import { PageMain } from '../components/molecules/page-main/page-main';
import { PageContent } from '../components/molecules/page-content/page-content';
import { Fragment } from 'react';

const Home: NextPage = () => {
  const { data: helloData = { greeting: 'Loading...' } } =
    trpc.public.hello.useQuery({ text: 'from tRPC' });

  return (
    <Fragment>
      <Head>
        <title>{settings.appName}</title>
        <meta name="description" content={settings.appDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageMain>
        <PageContent>
          <PageHeader text={settings.appName} />
          <div className="border-link bg-bg">{helloData.greeting}</div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-white">Hello wurld!</p>
          </div>
        </PageContent>
      </PageMain>
    </Fragment>
  );
};

export default Home