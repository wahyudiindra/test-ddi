import { BadRequestException, Injectable } from '@nestjs/common';
import { ITodoList } from 'src/constants/ITodoList';

const todoList: ITodoList[] = [];

@Injectable()
export class Case1Service {
    addTask(text: string) {
        if (todoList.find((t) => t.text === text)) {
            throw new BadRequestException('Task already exists');
        }

        const newTask: ITodoList = {
            id: (Math.random() * 1000000).toFixed(0),
            text,
            completed: false,
            createdAt: new Date(),
        };
        todoList.push(newTask);
        return newTask;
    }

    toggleTask(id: string) {
        const task = todoList.find((t) => t.id === id);
        if (!task) throw new BadRequestException('Task not found');

        task.completed = !task.completed;

        return task;
    }

    deleteTask(id: string) {
        const index = todoList.findIndex((t) => t.id === id);
        if (index == -1) throw new BadRequestException('Task not found');

        const deletedTask = todoList.splice(index, 1)[0];
        return deletedTask;
    }

    getTasks() {
        return todoList;
    }

    getTask(id: string) {
        const task = todoList.find((t) => t.id === id);
        if (!task) throw new BadRequestException('Task not found');

        return task;
    }
}
