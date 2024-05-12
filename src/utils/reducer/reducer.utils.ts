import { PayloadAction } from '@reduxjs/toolkit';
import { UnknownAction } from 'redux';

export type ActionWithPayload<T extends string, P> = PayloadAction<P, T>;

export type Action<T extends string> = PayloadAction<void, T>;

type Matchable<AC extends () => UnknownAction> = AC & {
	type: ReturnType<AC>['type'];
	match(action: UnknownAction): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => UnknownAction & { type: string }>(
	actionCreator: AC
): Matchable<AC>;

export function withMatcher<
	AC extends (...args: any[]) => UnknownAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
	const { type } = actionCreator();
	return Object.assign(actionCreator, {
		type,
		match: (action: UnknownAction) => type === action.type,
	});
}

export function createAction<T extends string, P>(
	type: T,
	payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
	type: T,
	payload: void
): Action<T>;

export function createAction<T, P>(type: T, payload: P) {
	return { type, payload };
}
