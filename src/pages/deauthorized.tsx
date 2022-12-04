import { type NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { PageHeader } from '../components/atoms/page-header/page-header';
import { PageContent } from '../components/molecules/page-content/page-content';
import { PageMain } from '../components/molecules/page-main/page-main';
import { settings } from '../settings/constants';

const Deauthorised: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Deauthorised | {settings.appName}</title>
        <meta name="description" content={settings.appDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageMain>
        <PageContent>
          <PageHeader text="Content" />
          <p className="text-white">
            Hey, well, I guess it&apos;s not you, it&apos;s us. You&apos;ve
            chosen to de-authorised your account, and we&apos;ve taken this very
            personally. 😭
          </p>
        </PageContent>
      </PageMain>
    </Fragment>
  );
};

export default Deauthorised;
