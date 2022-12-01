import type { FC } from 'react';
import { settings } from '../../../settings/constants';
import NextLink from 'next/link';
import { useShowMenu } from './hooks/useShowMenu.hook';
import { SignIn } from '../sign-in/sign-in';

export const Header: FC = () => {
  const { isMenuOpen, showMenu, handleToggleMenu } = useShowMenu();

  const interactiveMenuStyles =
    (isMenuOpen && !showMenu) || (!isMenuOpen && showMenu)
      ? 'w-0 opacity-0'
      : isMenuOpen && showMenu
      ? 'w-min w-96 p-5 opacity-100'
      : 'hidden';

  return (
    <header className="bg-white/10 p-5">
      <NextLink
        href="/"
        className="font-black uppercase tracking-widest text-white hover:text-yellow-100"
      >
        {settings.appName}
        <span className="sr-only">{settings.appDescription}</span>
      </NextLink>
      <button onClick={handleToggleMenu}>Menu</button>
      <section
        className={`fixed right-0 top-0 bottom-0 box-border justify-end overflow-hidden bg-slate-300 py-5 transition-all duration-500 ${interactiveMenuStyles}`}
      >
        <SignIn />
      </section>
    </header>
  );
};
