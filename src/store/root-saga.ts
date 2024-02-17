import { all, call } from 'typed-redux-saga/macro';
import { postsSaga } from './posts/posts.saga';

export function* rootSaga() {
	yield* all([call(postsSaga)]);
}
