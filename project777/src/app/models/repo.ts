import { User } from './user';

export interface IRepo {
    id: string;
    name: string;
    owner: User;
}