import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const createPurchase = (product, quantity) => api.post('/purchases', { product, quantity });
export const createReturn = (productId, reason) => api.post('/returns', { productId, reason });
export const createComment = (productId, comment, rating) => api.post('/comments', { productId, comment, rating });