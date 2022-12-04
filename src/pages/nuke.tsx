import { type NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { PageHeader } from '../components/atoms/page-header/page-header';
import { PageContent } from '../components/molecules/page-content/page-content';
import { PageMain } from '../components/molecules/page-main/page-main';
import { settings } from '../settings/constants';

const Nuke: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Nuke | {settings.appName}</title>
        <meta name="description" content={settings.appDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageMain>
        <PageContent>
          <PageHeader text="Deleting your account" />
          <p className="text-white">
            Hey, you want to delete your account and all your data? That&apos;s
            cool, I understand. You just gotta do something...
          </p>
        </PageContent>
      </PageMain>
    </Fragment>
  );
};

export default Nuke;
