import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class FindPostsDto {
    @IsNumber()
    @IsOptional()
    @ApiPropertyOptional()
    filterByAuthorId?: number = undefined;

    @IsBoolean()
    @IsOptional()
    @ApiPropertyOptional({ enum: ['true', 'false'] })
    @Transform(({ value }) => ['true', '1', true, 1].includes(value))
    includeUser?: string;
}
