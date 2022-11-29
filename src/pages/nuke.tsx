import { type NextPage } from 'next';
import Head from 'next/head';
import { PageHeader } from '../components/atoms/page-header/page-header';
import { Footer } from '../components/molecules/footer/footer';
import { PageContent } from '../components/molecules/page-content/page-content';
import { PageMain } from '../components/molecules/page-main/page-main';
import { PageWrapper } from '../components/molecules/page-wrapper/page-wrapper';
import { settings } from '../settings/constants';

const Nuke: NextPage = () => {
  return (
    <PageWrapper>
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
      <Footer />
    </PageWrapper>
  );
};

export default Nuke;
