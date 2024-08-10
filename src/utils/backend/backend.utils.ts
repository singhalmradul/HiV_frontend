import axios from 'axios';

import { POST_TYPE, Post } from '../../store/posts/posts.types';
import { User } from '../../store/user/user.types';
import { Comment } from '../../store/comments/comments.types';
import { Like } from '../../store/likes/likes.types';

const url = (endpoint: string) =>
	`${process.env.REACT_APP_BACKEND_URL}/${endpoint}`;

const userUrl = url('users');
const postUrl = (userId: string) => `${userUrl}/${userId}/posts`;
const followUrl = (userId: string, followId: string) =>
	`${userUrl}/${userId}/follow/${followId}`;
const likeUrl = (postId: string) => `${url('posts')}/${postId}/likes`;
const commentUrl = (postId: string) => `${url('posts')}/${postId}/comments`;

export const fetchPosts = async (
	userId: string | null,
	postType: POST_TYPE,
	currentUserId: string
) => {
	let url;
	switch (postType) {
		case POST_TYPE.USER_POSTS:
			if (!userId) return [];
			url = postUrl(userId);
			break;
		case POST_TYPE.FEED_POSTS:
			url = `${postUrl(currentUserId)}/feed`;
			break;
		case POST_TYPE.EXPLORE_POSTS:
			url = `${postUrl(currentUserId)}/explore`;
			break;
	}

	const response = await axios.get<Post[]>(url, {
		params: currentUserId && { userId: currentUserId },
	});
	return response.data;
};

export const fetchUser = async (id: string, userId: string) => {
	const response = await axios.get<User>(`${userUrl}/${id}`, {
		params: userId && { userId },
	});
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
	{ text, file }: TextWithFile
) => {
	const formData = new FormData();

	if (text?.length) formData.append('text', text);
	if (file) formData.append('embed', file);

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
	const response = await axios.post<Comment>(
		commentUrl(postId),
		{
			userId,
			text,
		},
		{
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);
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

export const followUser = async (userId: string, followId: string) => {
	await axios.post(followUrl(userId, followId));
};

export const unfollowUser = async (userId: string, followId: string) => {
	await axios.delete(followUrl(userId, followId));
};

export const updateUser = async (userId: string, user: User) => {
	const response = await axios.put<User>(`${userUrl}/${userId}`, user);
	return response.data;
};

export const updateAvatar = async (
	userId: string,
	{ avatar }: { avatar: File }
) => {
	const formData = new FormData();
	formData.append('avatar', avatar);

	const response = await axios.put<string>(
		`${userUrl}/${userId}/avatar`,
		formData,
		{
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		}
	);
	return response.data;
};
