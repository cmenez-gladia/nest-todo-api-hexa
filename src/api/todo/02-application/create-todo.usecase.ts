import { Inject, Logger } from '@nestjs/common';
import { Todo } from '../01-domain/todo.entity';
import { TodoPostgreSingleton } from '../03-infrastructure/server-adapter/todo.mapper.postgres';
import { ITodoRepository } from './ports/todo.repository';

export class CreateTodoUseCase {

  private readonly logger = new Logger(CreateTodoUseCase.name);

  constructor(@Inject('TodoRepository') private todoRepository: ITodoRepository) { }

  public async execute(todo: Todo){
    const record = TodoPostgreSingleton.toPersistence(todo)
    return this.todoRepository.create(record);
  } 
}
