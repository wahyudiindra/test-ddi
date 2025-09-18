import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Case1Service } from './case-1.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateCase1Dto } from './dto/create-case-1.dto';

@ApiTags('Case 1: Todo List')
@Controller('case-1')
export class Case1Controller {
    constructor(private readonly case1Service: Case1Service) {}

    @Get()
    getAllTasks() {
        return this.case1Service.getTasks();
    }

    @Get(':id')
    getTask(@Param('id') id: string) {
        return this.case1Service.getTask(id);
    }

    @Post()
    addTask(@Body() data: CreateCase1Dto) {
        return this.case1Service.addTask(data.text);
    }

    @Patch(':id/toggle')
    toggleTask(@Param('id') id: string) {
        return this.case1Service.toggleTask(id);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        return this.case1Service.deleteTask(id);
    }
}
