import type { FCC } from '../../../types/react.types';

export const PageMain: FCC = ({ children }) => {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      {children}
    </section>
  );
};
