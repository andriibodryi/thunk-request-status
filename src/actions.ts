import { createAction } from '@reduxjs/toolkit';
import { AsyncThunk } from './request-statuses.types';
import { getThunkPrefix } from './request-statuses.utils';

export const resetThunkStatus = createAction(
  '@requestStatuses/resetThunkStatus',
  (thunk: AsyncThunk) => {
    return {
      payload: getThunkPrefix(thunk),
    };
  },
);
