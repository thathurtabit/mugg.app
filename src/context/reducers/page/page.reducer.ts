import { PageActions } from '../../actions/page/page.actions.types';
import type { IPageState, IContextAction } from './../../types/context.types';

export const pageReducer = (
  state: IPageState,
  { type, payload }: IContextAction
): IPageState => {
  switch (type) {
    case PageActions.SET_MENU_OPEN:
      return {
        ...state,
        isMenuOpen: payload as boolean,
      };
    default:
      return state;
  }
};
