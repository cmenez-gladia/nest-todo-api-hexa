import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../entities/todo.entity';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private readonly todoRepository: Repository<Todo>
      ) {}

    async getAll(): Promise<Todo[]> {
        return await this.todoRepository.find();
    }

    async create(todo: Todo): Promise<Todo> {
        return await this.todoRepository.save(todo);
    }

    async get(id: string): Promise<Todo> {
      return await this.todoRepository.findOne(id);
    }

    async delete(id: string): Promise<DeleteResult> {
        return await this.todoRepository.delete(id);
    }

    async deleteAll(): Promise<void> {
        return await this.todoRepository.clear();
    }

    async update(todo: Todo): Promise<UpdateResult> {
        return await this.todoRepository.update(todo.id,todo);
    }

}