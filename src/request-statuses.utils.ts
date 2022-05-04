import { AnyAction } from '@reduxjs/toolkit';
import { AsyncThunk } from './request-statuses.types';

export const getRequestStatus = (action: AnyAction): string =>
  action.meta?.requestStatus;

export const getActionPrefix = (action: AnyAction): string =>
  action.type.replace(`/${getRequestStatus(action)}`, '');

export const getThunkPrefix = (thunk: AsyncThunk): string => thunk.typePrefix;
