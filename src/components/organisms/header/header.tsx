import type { FC } from 'react';
import { settings } from '../../../settings/constants';
import NextLink from 'next/link';

export const Header: FC = () => {
  return (
    <header className="bg-white/10 p-5">
      <NextLink
        href="/"
        className="font-black uppercase tracking-widest text-white hover:text-yellow-100"
      >
        {settings.appName}
        <span className="sr-only">{settings.appDescription}</span>
      </NextLink>
    </header>
  );
};
