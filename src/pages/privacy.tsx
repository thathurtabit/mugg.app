import { type NextPage } from 'next';
import Head from 'next/head';
import { PageHeader } from '../components/atoms/page-header/page-header';
import { settings } from '../settings/constants';

const Terms: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy | {settings.appName}</title>
        <meta name="description" content={settings.appDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <PageHeader text="Privacy" />
          <p className="text-white">Privacy!</p>
        </div>
      </main>
    </>
  );
};

export default Terms;
