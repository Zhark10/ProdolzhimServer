import { Document } from 'mongoose';

export interface IUserToken extends Document {
    readonly token: string;
    readonly uid: string;
    readonly expireAt: string;
}
