import type { FCC } from '../../../types/react.types';

export const PageMain: FCC = ({ children }) => {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center self-stretch">
      {children}
    </main>
  );
};
