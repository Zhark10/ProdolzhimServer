import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { ModelName } from '../global/models';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ModelName.Token, schema: TokenSchema }]),
  ],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule { }
