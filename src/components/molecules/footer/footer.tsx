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
    <footer>
      <ul className="flex flex-row items-center justify-center gap-4">
        {footerLinks.map(({ text, href, title }) => (
          <li key={href}>
            <NextLink className="text-white" href={href} title={title}>
              {text}
            </NextLink>
          </li>
        ))}
      </ul>
    </footer>
  );
};
