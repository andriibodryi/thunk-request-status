import { useSelector } from 'react-redux';
import { getThunkRequestStatus } from './selectors';
import { getThunkPrefix } from './request-statuses.utils';
import {
  PENDING_STATUS,
  FULFILLED_STATUS,
  REJECTED_STATUS,
  IDLE_STATUS,
} from './request-statuses.contstants';
import { AsyncThunk } from './request-statuses.types';

const useRootStatusSelector = (thunk: AsyncThunk) => {
  return useSelector(getThunkRequestStatus(getThunkPrefix(thunk)));
};

const checkIsSomeThunkEqualOfStatus = (thunk: AsyncThunk, status: string) => {
  return useRootStatusSelector(thunk) === status;
};

export const useIsIdle = (thunk: AsyncThunk) => {
  return checkIsSomeThunkEqualOfStatus(thunk, IDLE_STATUS);
};

export const useIsLoading = (thunk: AsyncThunk) => {
  return checkIsSomeThunkEqualOfStatus(thunk, PENDING_STATUS);
};

export const useIsRejected = (thunk: AsyncThunk) => {
  return checkIsSomeThunkEqualOfStatus(thunk, REJECTED_STATUS);
};

export const useIsFulfilled = (thunk: AsyncThunk) => {
  return checkIsSomeThunkEqualOfStatus(thunk, FULFILLED_STATUS);
};
