import { combineReducers } from '@reduxjs/toolkit';

import { postsReducer } from './posts/posts.reducer';
import { userReducer } from './user/user.reducer';
import { modalReducer } from './modal/modal.reducer';
import { commentsReducer } from './comments/comments.reducer';
import { likesReducer } from './likes/likes.reducer';

export const rootReducer = combineReducers({
	posts: postsReducer,
	likes: likesReducer,
	comments: commentsReducer,
	user: userReducer,
	modal: modalReducer,
});
