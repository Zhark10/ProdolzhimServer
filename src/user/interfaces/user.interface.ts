import { Document } from 'mongoose';

export interface IUser extends Document {
    readonly uid: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly role: string;
    readonly nickname: string;
    readonly rating: number;
    readonly password: string;
    readonly email: string;
    readonly phone: string;
    readonly avatar: string;
    readonly avatarId: string;
    readonly gender: string;
}
