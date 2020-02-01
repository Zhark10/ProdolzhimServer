import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsOptional } from 'class-validator';

export class CreateUserDto {
    @ApiProperty()
    readonly uid: number;

    @ApiProperty()
    @IsString()
    readonly firstName: string;

    @ApiProperty()
    @IsString()
    readonly lastName: string;

    @ApiProperty()
    readonly roles: string[];

    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly nickname: string;

    @ApiProperty()
    readonly rating: number;

    @ApiProperty()
    @IsString()
    readonly password: string;

    @ApiProperty()
    @IsEmail()
    @IsOptional()
    readonly email: string;

    @ApiProperty()
    @IsString()
    readonly phone: string;

    @ApiProperty()
    @IsString()
    readonly avatar: string;

    @ApiProperty()
    @IsString()
    readonly avatarId: string;

    @ApiProperty()
    @IsString()
    readonly gender: string;

    @ApiProperty()
    readonly workIds: number[];
}
