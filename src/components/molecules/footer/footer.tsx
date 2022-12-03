import type { FC } from 'react';
import type { IFooterLink } from './footer.types';
import NextLink from 'next/link';

export const Footer: FC = () => {
  const footerLinks: IFooterLink[] = [
    { title: 'Home', text: 'Home', href: '/' },
    { title: 'About', text: 'About', href: '/about' },
    { title: 'Nuke', text: 'Nuke', href: '/nuke' },
    { title: 'Privacy', text: 'Privacy', href: '/privacy' },
    { title: 'Terms', text: 'Terms', href: '/terms' },
    { title: 'Contact', text: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="flex w-full">
      <ul className="ml-auto mr-4 flex flex-row items-center justify-center gap-4 p-3">
        {footerLinks.map(({ text, href, title }) => (
          <li key={href}>
            <NextLink
              className="space-x-4 text-xs uppercase tracking-wider text-gray-400 outline-offset-4 hover:text-gray-300 focus:border-action focus:outline-none focus:ring-1 focus:ring-action focus:ring-offset-4 focus:ring-offset-background"
              href={href}
              title={title}
            >
              {text}
            </NextLink>
          </li>
        ))}
      </ul>
    </footer>
  );
};
