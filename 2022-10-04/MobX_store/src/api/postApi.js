import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getPostsApi = () => api.get('/posts');

export const getPostApi = (id) => api.get(`/posts/${id}`);

export const putPostApi = (id, body) => api.put(`/posts/${id}`, body);

export const deletePostApi = (id) => api.delete(`/posts/${id}`);
