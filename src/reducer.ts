import { createReducer } from '@reduxjs/toolkit';
import { getActionPrefix, getRequestStatus } from './request-statuses.utils';
import { resetThunkStatus } from './actions';
import { RequestStatusesState } from './request-statuses.types';
import { IDLE_STATUS } from './request-statuses.contstants';

const initialState: RequestStatusesState = {};

export const requestStatuses = createReducer(initialState, (builder) => {
  builder
    .addCase(resetThunkStatus, (state, action) => {
      state[action.payload] = IDLE_STATUS;
    })
    .addMatcher(
      (action) => Boolean(getRequestStatus(action)),
      (state, action) => {
        state[getActionPrefix(action)] = getRequestStatus(action);
      },
    );
});
