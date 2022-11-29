import type { FCC } from '../../../types/react.types';

export const PageContent: FCC = ({ children }) => {
  return (
    <section className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
      {children}
    </section>
  );
};
