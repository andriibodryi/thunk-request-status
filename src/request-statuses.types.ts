import { AnyAsyncThunk } from '@reduxjs/toolkit/dist/matchers';

export type RequestStatusesState = Record<string, string>;

export type AsyncThunk = AnyAsyncThunk & { typePrefix: string };

export type Store = {
  requestStatuses: RequestStatusesState;
};
