import { all, call } from 'typed-redux-saga/macro';
import { postsSaga } from './posts/posts.saga';
import { userSaga } from './user/user.saga';

export function* rootSaga() {
	yield* all([call(postsSaga), call(userSaga)]);
}
