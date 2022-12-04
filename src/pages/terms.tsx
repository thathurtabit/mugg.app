import { type NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { PageHeader } from '../components/atoms/page-header/page-header';
import { PageContent } from '../components/molecules/page-content/page-content';
import { PageMain } from '../components/molecules/page-main/page-main';
import { settings } from '../settings/constants';

const Terms: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Terms | {settings.appName}</title>
        <meta name="description" content={settings.appDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageMain>
        <PageContent>
          <PageHeader text="Terms" />
          <p className="text-white">Terms and conditions!</p>
        </PageContent>
      </PageMain>
    </Fragment>
  );
};

export default Terms;
