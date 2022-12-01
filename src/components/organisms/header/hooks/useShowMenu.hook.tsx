import { useContext, useEffect, useState } from 'react';
import { setMenuOpen } from '../../../../context/actions/page/page.actions';
import { MuggAppContext } from '../../../../context/context/context';

/** delayed show menu hook with handleToggleMenuTime function */
export const useShowMenu = () => {
  const { state, dispatch } = useContext(MuggAppContext);
  const { isMenuOpen } = state.page;
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    dispatch(setMenuOpen(!isMenuOpen));
  };

  useEffect(() => {
    let transitionTimeout: ReturnType<typeof setTimeout>;

    const toggleMenuTimeout = (ms: number) => {
      transitionTimeout = setTimeout(() => setShowMenu(!showMenu), ms);
    };

    if (isMenuOpen) {
      if (!showMenu) {
        document.body.style.overflow = 'hidden';
        toggleMenuTimeout(10);
      }
    } else {
      if (showMenu) {
        document.body.style.overflow = 'auto';
        toggleMenuTimeout(1000);
      }
    }

    return () => {
      clearTimeout(transitionTimeout);
    };
  }, [isMenuOpen, showMenu]);

  return { isMenuOpen, showMenu, handleToggleMenu };
};
