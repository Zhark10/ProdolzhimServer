import { CreateUserTokenDto } from './dto/create-user-token.dto';
import { IUserToken } from './interfaces/user-token-interfaces';
import { ModelName } from './../global/models';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TokenService {
    constructor(@InjectModel(ModelName.Token) private readonly tokenModel: Model<IUserToken>) { }

    async create(createUserTokenDto: CreateUserTokenDto): Promise<IUserToken> {
        const userToken = new this.tokenModel(createUserTokenDto);
        return await userToken.save();
    }

    async delete(uid: string, token: string): Promise<{ ok?: number, n?: number }> {
        return await this.tokenModel.deleteOne({ uid, token });
    }

    async deleteAll(uid: string): Promise<{ ok?: number, n?: number }> {
        return await this.tokenModel.deleteMany({ uid });
    }

    async exists(uid: string, token: string): Promise<boolean> {
        return await this.tokenModel.exists({ uid, token });
    }
}
