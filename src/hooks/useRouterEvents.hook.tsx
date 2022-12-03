import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MuggAppContext } from '../context/context/context';
import { setMenuOpen } from '../context/actions/page/page.actions';

export const useRouterEvents = () => {
  const { events } = useRouter();
  const { state, dispatch } = useContext(MuggAppContext);
  const { isMenuOpen } = state.page;

  useEffect(() => {
    const handleRouteChangeStart = () => {
      if (isMenuOpen) {
        dispatch(setMenuOpen(false));
      }
    };
    events.on('routeChangeStart', handleRouteChangeStart);
  }, [events, isMenuOpen, dispatch]);
};
