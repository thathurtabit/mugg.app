import { type NextPage } from 'next';
import Head from 'next/head';
import { PageHeader } from '../components/atoms/page-header/page-header';
import { Footer } from '../components/molecules/footer/footer';
import { PageContent } from '../components/molecules/page-content/page-content';
import { PageMain } from '../components/molecules/page-main/page-main';
import { PageWrapper } from '../components/molecules/page-wrapper/page-wrapper';
import { Header } from '../components/organisms/header/header';
import { settings } from '../settings/constants';

const Contact: NextPage = () => {
  return (
    <PageWrapper>
      <Head>
        <title>Contact | {settings.appName}</title>
        <meta name="description" content={settings.appDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageMain>
        <PageContent>
          <PageHeader text="Contact" />
          <p className="text-white">Contact page!</p>
        </PageContent>
      </PageMain>
      <Footer />
    </PageWrapper>
  );
};

export default Contact;
