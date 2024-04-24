import { combineReducers } from '@reduxjs/toolkit';

import { postsReducer } from './posts/posts.reducer';
import { userReducer } from './user/user.reducer';
import { modalReducer } from './modal/modal.reducer';

export const rootReducer = combineReducers({
	posts: postsReducer,
	user: userReducer,
	modal: modalReducer,
});
