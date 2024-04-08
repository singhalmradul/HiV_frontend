import axios from 'axios';

import { Post } from '../../store/posts/posts.types';

const url = (endpoint: string) =>
	`${process.env.REACT_APP_BACKEND_URL}/${endpoint}`;

const userUrl = url('users');
const postUrl = (userId: string) => `${userUrl}/${userId}/posts`;

export const fetchPosts = async (url: string) => {
	const response = await axios.get<Post[]>(url);
	return response.data;
};

export const fetchUserPosts = async (userId: string) => {
	return fetchPosts(postUrl(userId));
};

export const fetchFeedPosts = async (userId: string) => {
	return fetchPosts(`${postUrl(userId)}/feed`);
};
export const fetchUser = async (id: string) => {
	const response = await axios.get(`${userUrl}/${id}`);
	return response.data;
};
