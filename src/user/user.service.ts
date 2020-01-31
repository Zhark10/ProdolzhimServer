import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { ModelName } from './../global/models';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
    constructor(@InjectModel(ModelName.User) private readonly userModel: Model<IUser>) {

    }
}
