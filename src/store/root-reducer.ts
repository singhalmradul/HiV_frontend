import { combineReducers } from '@reduxjs/toolkit';

import { postsReducer } from './posts/posts.reducer';
import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({ posts: postsReducer , user: userReducer});
