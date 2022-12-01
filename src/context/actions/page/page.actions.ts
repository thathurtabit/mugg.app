import type { IContextAction } from '../../types/context.types';
import { PageActions } from './page.actions.types';

export const setMenuOpen = (payload: boolean): IContextAction => ({
  type: PageActions.SET_MENU_OPEN,
  payload,
});
