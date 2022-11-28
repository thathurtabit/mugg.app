import type { NextAuthOptions } from 'next-auth'
import { getProviders, signIn } from 'next-auth/react'
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Fragment } from 'react';
import { ErrorMessage } from '../../components/atoms/error-message/error-message';
import { PageHeader } from '../../components/atoms/page-header/page-header';
import { settings } from '../../settings/constants';
import { getSignInErrorMessage } from '../../utils/sign-in.utils';
import type { ESignInMessage } from '../../types/sign-in.types';

export const SignIn = ({ providers }: NextAuthOptions) => {
  const { query } = useRouter();
  const providersList = Object.values(providers);

  const { error } = query;

  const errorFiltered = error && Array.isArray(error) ? error[0] : error;

  const errorMessage = errorFiltered
    ? getSignInErrorMessage(errorFiltered as ESignInMessage)
    : null;

  return (
    <Fragment>
      <Head>
        <title>Sign In | {settings.appName}</title>
        <meta name="description" content={settings.appDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <PageHeader text={`Sign in to ${settings.appName}`} />
        {errorMessage && <ErrorMessage title="Uh oh" text={errorMessage} />}
        {providersList && (
          <ul className="my-3">
            {providersList.map(({ name, id }) => (
              <li className="m-2 border px-5 py-2" key={name}>
                <button
                  className="block text-white"
                  onClick={() => signIn(id, { callbackUrl: settings.appURL })}
                >
                  Sign in with {name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </Fragment>
  );
};

export default SignIn

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
