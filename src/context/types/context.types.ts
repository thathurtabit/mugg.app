import type { Dispatch } from 'react';

export interface IAppState {
  page: IPageState;
}

export interface IPageState {
  isMenuOpen: boolean;
}

// =========================

// Reducer
export type ContextReducer = (
  state: IAppState,
  action: IContextAction
) => IAppState;

// =========================

// Actions
export interface IContextAction {
  type: string;
  payload?: unknown;
}

// =========================
// CONTEXT

export interface IAppContext {
  state: IAppState;
  dispatch: Dispatch<IContextAction>;
}
