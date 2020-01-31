import { EnumRole } from '../enums/role.enum';
import { EnumGender } from './../enums/gender.enum';
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    uid: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: {type: String, required: true, enum: Object.values(EnumRole)},
    nickname: { type: String, required: true },
    rating: { type: Number, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    avatar: { type: String, default: null },
    avatarId: { type: String, default: null },
    gender: {type: String, required: true, enum: Object.values(EnumGender)},
});

UserSchema.index({email: 1}, {unique: true});
