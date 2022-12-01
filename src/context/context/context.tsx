import { createContext, useMemo, useReducer } from 'react';
import { initState } from '../state/initState';
import type { ContextReducer, IAppContext } from '../types/context.types';
import type { IAppProvider } from './context.types';
import combineReducers from 'react-combine-reducers';
import { pageReducer } from '../reducers/page/page.reducer';

export const MuggAppContext = createContext<IAppContext>({
  state: initState,
  dispatch: () => null,
});

MuggAppContext.displayName = 'MuggAppContext';

export const MuggAppProvider = ({ children }: IAppProvider): JSX.Element => {
  const [combinedReducer, combinedInitState] = combineReducers<ContextReducer>({
    page: [pageReducer, initState.page],
  });

  const [state, dispatch] = useReducer<ContextReducer>(
    combinedReducer,
    combinedInitState
  );

  const memoizedContextValue: IAppContext = useMemo<IAppContext>(
    () => ({ state, dispatch }),
    [state, dispatch]
  );

  return (
    <MuggAppContext.Provider value={memoizedContextValue}>
      {children}
    </MuggAppContext.Provider>
  );
};
