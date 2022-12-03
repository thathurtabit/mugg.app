import type { FCC } from '../../../types/react.types';

export const PageWrapper: FCC = ({ children }) => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-background">
      {children}
    </section>
  );
};
