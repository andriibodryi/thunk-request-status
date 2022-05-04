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

export const useIsIdle = (thunk: AsyncThunk) => {
  const status = useRootStatusSelector(thunk);
  return status === IDLE_STATUS;
};

export const useIsLoading = (thunk: AsyncThunk) => {
  const status = useRootStatusSelector(thunk);
  return status === PENDING_STATUS;
};

export const useIsRejected = (thunk: AsyncThunk) => {
  const status = useRootStatusSelector(thunk);
  return status === REJECTED_STATUS;
};

export const useIsFulfilled = (thunk: AsyncThunk) => {
  const status = useRootStatusSelector(thunk);
  return status === FULFILLED_STATUS;
};
