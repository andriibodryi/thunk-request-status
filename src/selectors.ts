import { Store } from './request-statuses.types';

const getRootRequestStatusesSelector = (state: Store) => state.requestStatuses;

export const getThunkRequestStatus = (typePrefix: string) => (state: Store) =>
  getRootRequestStatusesSelector(state)[typePrefix];
