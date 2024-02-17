import { combineReducers } from '@reduxjs/toolkit';
import { postsReducer } from './posts/posts.reducer';

export const rootReducer = combineReducers({ posts: postsReducer });
