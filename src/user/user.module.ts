import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import UserSchema from './schemas/user.schema';

import { ModelName } from './../global/models';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: ModelName.User, schema: UserSchema}])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
