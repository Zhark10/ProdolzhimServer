import { Document } from 'mongoose';

export interface IUser extends Document {
    readonly uid: number;
    readonly roles: string[];
    readonly firstName: string;
    readonly lastName: string;
    readonly gender: string;
    readonly rating: number;
    readonly nickname: string;
    readonly password: string;
    readonly email: string;
    readonly phone: string;
    readonly avatar: string;
    readonly avatarId: string;
    readonly workIds: number[];
}
