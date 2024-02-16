import axios from 'axios';
import { PostType } from '../../components/post/post.component';

const url = (endpoint: string) => `${process.env.REACT_APP_BACKEND_URL}/${endpoint}`;

const post_url = url('posts');

export const getPosts = async () => {

    try {

        const response = await axios.get<PostType[]>(post_url);
        return response.data

    } catch (error) {

        console.error('Error fetching posts','from',post_url,error);
        return [];

    }

};