import { Middleware, configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';
import { AuthContext } from 'oidc-react';

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware({
	context: { AuthContext }
});

const middlewares = [
	process.env.NODE_ENV !== 'production' && logger,
	sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ thunk: false }).concat(middlewares),
	devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);
