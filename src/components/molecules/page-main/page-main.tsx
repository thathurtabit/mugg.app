import type { FCC } from '../../../types/react.types';
import { motion } from 'framer-motion';
import { EVariantKeys, variants } from './page-main.transition';

export const PageMain: FCC = ({ children }) => {
  return (
    <motion.main
      variants={variants}
      initial={EVariantKeys.HIDDEN}
      animate={EVariantKeys.ENTER}
      exit={EVariantKeys.EXIT}
      transition={{ type: 'ease-out' }}
      className={`flex w-full flex-1 flex-col items-center justify-center self-stretch font-sans`}
    >
      {children}
    </motion.main>
  );
};
