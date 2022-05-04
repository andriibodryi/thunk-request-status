# Thunk Request Statuses

## Purpose
If you are using `createAsyncThunk` from `@reduxjs/toolkit`,  `thunk-request-status` gives an ability to avoid a lot of isLoading statuses in your project and provide the simple API for subscribing on 3 statuses of your async action.

## You can subscribe on the following states:
- isIdle state
- isPending state
- isRejected state
- isFulfilled state


### Basic example

request-user.thunk.ts

```typescript
const requestUserThunk = createAsyncThunk('request-user', async () => {
    const response = await fetch('https://some-url.com');
    return response.json();
})
```

### Components usage:
Now if you are interested in some status of your action,it is simple to subscribe on that in the template.

```typescript jsx
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useIsLoading, useIsRejected, useIsFulfilled, useIsIdle } from "thunk-request-status";
import { requestUserThunk } from "@store/user/request-user.thunk.ts";

export const UserPage = () => {
  const dispatch = useDispatch();
    
  const isPending = useIsLoading(requestUserThunk);
  const isFulfilled = useIsFulfilled(requestUserThunk);
  const isRejected = useIsRejected(requestUserThunk);
  const isIdle = useIsIdle(requestUserThunk);

  useEffect(() => {
    dispatch(requestUserThunk());
  }, [])

  useEffect(() => {
    if(isFulfilled) {
      alert('Fulfilled!');
    }
    if(isRejected) {
      alert('Rejected!');
    }
  }, [isFulfilled, isRejected])

  if(isPending) {
    return <FullScreenLoader />
  }

  return (
    /// ..
  )
}
```

If you need reset status to default state you may use `resetThunkStatus` action

```typescript jsx
import React, {useCallback, useEffect} from "react";
import {useDispatch} from "react-redux";
import {resetThunkStatus} from "thunk-request-status";
import {requestUserThunk} from "@store/user/request-user.thunk.ts";

export const UserPage = () => {
    const dispatch = useDispatch();

    const resetUserRequestStatus = useCallback(() => {
        dispatch(resetThunkStatus(requestUserThunk));
    }, [])

    return (
        /// ..
    )
}
```

## Installation

Open a Terminal in the project root and run:

```sh
yarn add thunk-request-status
```
or
```sh
npm i thunk-request-status
```


## Setup

- Add `requestStatuses` reducer to your root reducer.

```js
import { requestStatuses } from 'thunk-request-status';

export const rootReducer = combineReducers({
  requestStatuses, // <- add here
  // ...
})
```
