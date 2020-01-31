import { ModelName } from './../../global/models';
import * as mongoose from 'mongoose';

export const TokenSchema = new mongoose.Schema({
    token: {type: String, required: true},
    uid: {type: mongoose.Types.ObjectId, required: true, ref: ModelName.User},
    expireAt: {type: Date, required: true},
});
