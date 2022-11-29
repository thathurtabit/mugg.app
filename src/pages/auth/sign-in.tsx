import type { NextAuthOptions } from 'next-auth'
import { getProviders, signIn } from 'next-auth/react'
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ErrorMessage } from '../../components/atoms/error-message/error-message';
import { PageHeader } from '../../components/atoms/page-header/page-header';
import { settings } from '../../settings/constants';
import { getSignInErrorMessage } from '../../utils/sign-in.utils';
import type { ESignInMessage } from '../../types/sign-in.types';
import { Footer } from '../../components/molecules/footer/footer';
import { PageWrapper } from '../../components/molecules/page-wrapper/page-wrapper';
import { PageMain } from '../../components/molecules/page-main/page-main';
import { PageContent } from '../../components/molecules/page-content/page-content';

export const SignIn = ({ providers }: NextAuthOptions) => {
  const { query } = useRouter();
  const providersList = Object.values(providers);

  const { error } = query;

  const errorFiltered = error && Array.isArray(error) ? error[0] : error;

  const errorMessage = errorFiltered
    ? getSignInErrorMessage(errorFiltered as ESignInMessage)
    : null;

  return (
    <PageWrapper>
      <Head>
        <title>Sign In | {settings.appName}</title>
        <meta name="description" content={settings.appDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageMain>
        <PageContent>
          <PageHeader text={`Sign in to ${settings.appName}`} />
          {errorMessage && <ErrorMessage title="Uh oh" text={errorMessage} />}
          {providersList && (
            <ul className="my-3">
              {providersList.map(({ name, id }) => (
                <li className="m-2" key={name}>
                  <button
                    className="block w-full rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
                    onClick={() => signIn(id, { callbackUrl: settings.appURL })}
                  >
                    Sign in with {name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </PageContent>
      </PageMain>
      <Footer />
    </PageWrapper>
  );
};

export default SignIn

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
