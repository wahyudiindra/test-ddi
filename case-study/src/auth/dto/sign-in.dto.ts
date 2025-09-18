import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ default: 'john@example.com' })
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ default: 'password' })
    password: string;
}
