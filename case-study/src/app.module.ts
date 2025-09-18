import { Module } from '@nestjs/common';
import { Case1Module } from './case-1/case-1.module';

@Module({
    imports: [Case1Module],
})
export class AppModule {}
