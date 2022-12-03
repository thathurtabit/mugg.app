import { useContext, useEffect } from 'react';
import { setMenuOpen } from '../context/actions/page/page.actions';
import { MuggAppContext } from '../context/context/context';

export const useEscapeHook = () => {
  const { state, dispatch } = useContext(MuggAppContext);
  const { isMenuOpen } = state.page;

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        dispatch(setMenuOpen(false));
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen, dispatch]);
};
