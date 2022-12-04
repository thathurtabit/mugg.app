import { Raleway } from '@next/font/google';
import type { FCC } from '../../../types/react.types';

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });

export const AppWrapper: FCC = ({ children }) => {
  return (
    <div
      className={`${raleway.variable} flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-background font-sans`}
    >
      {children}
    </div>
  );
};
