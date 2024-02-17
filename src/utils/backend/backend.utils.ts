import axios from 'axios';
import { Post } from '../../store/posts/posts.types';

const url = (endpoint: string) =>
	`${process.env.REACT_APP_BACKEND_URL}/${endpoint}`;

const post_url = url('posts');

export const fetchPosts = async () => {
	const response = await axios.get<Post[]>(post_url);
	return response.data;
};