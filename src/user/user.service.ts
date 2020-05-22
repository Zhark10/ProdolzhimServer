import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { assignIn } from 'lodash';
import * as bcrypt from 'bcrypt';

import { ModelName } from './../global/models';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
    constructor(@InjectModel(ModelName.User) private readonly userModel: Model<IUser>) { }

    async create(createUserDto: CreateUserDto, roles: string[]): Promise<IUser> {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(createUserDto.password, salt);

        const createdUser = new this.userModel(assignIn(createUserDto, { password: hash, roles }));
        return await createdUser.save();
    }

    async checkPassword(password, hashPassword): Promise<boolean> {
        return await bcrypt.compare(password, hashPassword);
    }

    async findByEmail(email: string): Promise<IUser> {
        const findedUser = await this.userModel.findOne({email});
        return await this.userModel.findOne({email});
    }

    async find(id: string): Promise<IUser> {
        return await this.userModel.findById(id).exec();
    }
}
