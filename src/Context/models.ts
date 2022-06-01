import { Dispatch } from "react";

export interface ContextProps<T, P> {
  state: T;
  dispatch: Dispatch<P>;
}

export enum ActionTypes {
  SET_CONTEXT = "SET_CONTEXT",
}

export type GlobalAction =
  | { type: ActionTypes.SET_CONTEXT; payload: GlobalState }


export interface GlobalState {}

export interface GlobalContextProps
  extends ContextProps<GlobalState, GlobalAction> {}
