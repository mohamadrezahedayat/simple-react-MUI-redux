import axios from 'axios';
import { IProduct } from '../types/product';
import { IUser } from '../types/user';

export const getProducts = () => {
  return axios.get<IProduct[]>('https://fakestoreapi.com/products');
};

export const getUsers = () => {
  return axios.get<IUser[]>('https://fakestoreapi.com/users');
};
