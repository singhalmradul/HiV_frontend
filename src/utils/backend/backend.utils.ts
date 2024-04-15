import axios from 'axios';

import { POST_TYPES, Post } from '../../store/posts/posts.types';
import { User } from '../../store/user/user.types';

const url = (endpoint: string) =>
	`${process.env.REACT_APP_BACKEND_URL}/${endpoint}`;

const userUrl = url('users');
const postUrl = (userId: string) => `${userUrl}/${userId}/posts`;

const likeUrl = (postId: string) => `${url('posts')}/${postId}/likes`;

export const fetchPosts = async (userId: string, postType: POST_TYPES) => {
	if (!userId) return [];

	let url;
	switch (postType) {
		case POST_TYPES.USER_POSTS:
			url = postUrl(userId);
			break;
		case POST_TYPES.FEED_POSTS:
			url = `${postUrl(userId)}/feed`;
			break;
	}

	const response = await axios.get<Post[]>(url);
	return response.data;
};

export const fetchUser = async (id: string) => {
	const response = await axios.get<User>(`${userUrl}/${id}`);
	return response.data;
};

export const likePost = async (userId: string, postId: string) => {
	if (!userId) return;

	const response = await axios.post(likeUrl(postId), {
		id: userId,
	});
	return response.data;
};

export const unlikePost = async (userId: string, postId: string) => {
	if (!userId) return;

	const response = await axios.delete(`${likeUrl(postId)}/${userId}`);
	return response.data;
};
export type TextWithFile = {
	text: string | null;
	file: File | null;
};

export const createPost = async (userId: string, textWithFile: TextWithFile) => {

	const formData = new FormData();

	if(textWithFile.text?.length)
		formData.append('text', textWithFile.text);
	if(textWithFile.file)
		formData.append('embed', textWithFile.file);

	const response = await axios.post<Post>(
		postUrl(userId),
		formData,
		{
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		},
	);
	console.log(response.data)
	return response.data;
};
