import axios from 'axios';

import { Post } from '../../store/posts/posts.types';

const url = (endpoint: string) =>
	`${process.env.REACT_APP_BACKEND_URL}/${endpoint}`;

const postUrl = url('posts');

export const fetchPosts = async () => {
	const response = await axios.get<Post[]>(postUrl);
	return response.data;
};

const userUrl = url('users');

export const fetchUser = async (id: string) => {
	const response = await axios.get(`${userUrl}/${id}`);
	return response.data;
};