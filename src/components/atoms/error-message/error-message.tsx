import type { FC } from 'react';
import type { IErrorMessage } from './error-message.types';
import { BiError } from 'react-icons/bi';

export const ErrorMessage: FC<IErrorMessage> = ({ title, text }) => {
  return (
    <section className="max-md min-['600px']: my-4 flex flex-col justify-start rounded-lg bg-red-800 py-2 px-5">
      <h3 className="flex flex-row items-center justify-start text-lg text-white">
        <BiError className="mr-2" />
        {title}
      </h3>
      <p className="text-xs text-white">{text}</p>
    </section>
  );
};
