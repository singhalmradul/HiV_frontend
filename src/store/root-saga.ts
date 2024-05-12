import { all, call } from 'typed-redux-saga/macro';
import { postsSaga } from './posts/posts.saga';
import { userSaga } from './user/user.saga';
import { commentsSaga } from './comments/comments.saga';
import { likesSaga } from './likes/likes.saga';

export function* rootSaga() {
	yield* all([call(postsSaga), call(userSaga), call(commentsSaga), call(likesSaga)]);
}
