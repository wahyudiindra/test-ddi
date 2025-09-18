import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCase1Dto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'Buy groceries', description: 'The text of the todo task' })
    text: string;
}
