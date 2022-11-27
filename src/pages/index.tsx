import { type NextPage } from "next";
import Head from 'next/head'

// import { trpc } from '../utils/trpc'
import { AuthProviders } from '../components/organisms/auth-providers/auth-providers'
import { PageHeader } from '../components/atoms/page-header/page-header'
import { settings } from '../settings/constants'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{settings.appName}</title>
        <meta name="description" content={settings.appDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <PageHeader text={settings.appName} />
          <div className="text-white">Testing</div>
          <div className="flex flex-col items-center gap-2">
            <AuthProviders />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home