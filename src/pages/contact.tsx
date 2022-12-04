import { type NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { PageHeader } from '../components/atoms/page-header/page-header';
import { PageContent } from '../components/molecules/page-content/page-content';
import { PageMain } from '../components/molecules/page-main/page-main';
import { settings } from '../settings/constants';

const Contact: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact | {settings.appName}</title>
        <meta name="description" content={settings.appDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageMain>
        <PageContent>
          <PageHeader text="Contact" />
          <p className="text-white">Contact page!</p>
        </PageContent>
      </PageMain>
    </Fragment>
  );
};

export default Contact;
