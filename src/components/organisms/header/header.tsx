import type { FC } from 'react';
import { settings } from '../../../settings/constants';
import NextLink from 'next/link';
import { useShowMenu } from './hooks/useShowMenu.hook';
import { SignIn } from '../sign-in/sign-in';
import { useEscapeHook } from '../../../hooks/useEscapeKey.hook';
import { useRouterEvents } from '../../../hooks/useRouterEvents.hook';

export const Header: FC = () => {
  const { isMenuOpen, showMenu, handleToggleMenu } = useShowMenu();

  useEscapeHook();
  useRouterEvents();

  const interactiveMenuStyles =
    (isMenuOpen && !showMenu) || (!isMenuOpen && showMenu)
      ? 'w-0 opacity-0'
      : isMenuOpen && showMenu
      ? 'w-min w-96 p-5 opacity-100'
      : 'hidden';

  return (
    <header className="flex w-full">
      <NextLink
        href="/"
        className="inline-block bg-backgroundDark p-3 font-black uppercase tracking-widest text-white hover:text-yellow-100"
      >
        {settings.appName}
        <span className="sr-only">{settings.appDescription}</span>
      </NextLink>
      <button
        onClick={handleToggleMenu}
        className="ml-auto p-3 text-sm font-medium uppercase tracking-widest text-white hover:text-yellow-100"
      >
        Menu
      </button>
      <section
        className={`fixed right-0 top-0 bottom-0 box-border justify-end overflow-hidden bg-backgroundLight py-5 text-sm shadow-sm transition-all duration-500 ${interactiveMenuStyles}`}
      >
        <SignIn />
      </section>
    </header>
  );
};
