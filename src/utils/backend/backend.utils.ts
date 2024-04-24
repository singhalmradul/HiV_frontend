import axios from 'axios';

import { POST_TYPES, Post } from '../../store/posts/posts.types';
import { User } from '../../store/user/user.types';
import { Comment } from '../../store/comments/comments.types';
import { Like } from '../../store/likes/likes.types';

const url = (endpoint: string) =>
	`${process.env.REACT_APP_BACKEND_URL}/${endpoint}`;

const userUrl = url('users');
const postUrl = (userId: string) => `${userUrl}/${userId}/posts`;
const likeUrl = (postId: string) => `${url('posts')}/${postId}/likes`;
const commentUrl = (postId: string) => `${url('posts')}/${postId}/comments`;

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
		case POST_TYPES.EXPLORE_POSTS:
			url = `${postUrl(userId)}/explore`;
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
	const response = await axios.post(likeUrl(postId), {
		id: userId,
	});
	return response.data;
};

export const unlikePost = async (userId: string, postId: string) => {
	const response = await axios.delete(`${likeUrl(postId)}/${userId}`);
	return response.data;
};
export type TextWithFile = {
	text: string | null;
	file: File | null;
};

export const createPost = async (
	userId: string,
	textWithFile: TextWithFile
) => {
	const formData = new FormData();

	if (textWithFile.text?.length) formData.append('text', textWithFile.text);
	if (textWithFile.file) formData.append('embed', textWithFile.file);

	const response = await axios.post<Post>(postUrl(userId), formData, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
	return response.data;
};

export type CommentWithoutUserId = {
	text: string;
	postId: string;
};

export const postComment = async (
	userId: string,
	postId: string,
	text: string
) => {
	const response = await axios.post<Comment>(commentUrl(postId), {
		userId,
		text,
	},{
		headers: {
			'Content-Type': 'application/json',
		}
});
	return response.data;
};

export const fetchComments = async (postId: string) => {
	const response = await axios.get<Comment[]>(commentUrl(postId));
	return response.data;
};

export const fetchLikes = async (postId: string) => {
	const response = await axios.get<Like[]>(`${likeUrl(postId)}`);
	return response.data;
};
