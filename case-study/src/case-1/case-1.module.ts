import { Module } from '@nestjs/common';
import { Case1Service } from './case-1.service';
import { Case1Controller } from './case-1.controller';

@Module({
  controllers: [Case1Controller],
  providers: [Case1Service],
})
export class Case1Module {}
