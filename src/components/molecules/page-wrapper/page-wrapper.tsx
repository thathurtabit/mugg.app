import type { FCC } from '../../../types/react.types';

export const PageWrapper: FCC = ({ children }) => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      {children}
    </section>
  );
};
