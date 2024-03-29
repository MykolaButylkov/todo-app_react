import { User } from '../types/User';
import { client } from '../utils/fetchClient';

export const getUser = (email: string) => {
  return client.get<User[]>(`/users?email=${email}`);
};

export const createUser = (email: string, data: unknown) => {
  return client.post<User>('/users', data);
};
