import { Inject, Logger } from '@nestjs/common';
import { Todo } from '../01-domain/todo.entity';
import { TodoPostgreSingleton } from '../03-infrastructure/server-adapter/todo.mapper.postgres';
import { TodoDto } from '../03-infrastructure/user-adapter/dto/todo.dto';
import { ITodoRepository } from './ports/todo.repository';


export class GetTodoUseCase {

  private readonly logger = new Logger(GetTodoUseCase.name);

  constructor(@Inject('TodoRepository') private todoRepository: ITodoRepository) { }

  public async execute(id: number): Promise<Todo>{
    const todo= await this.todoRepository.get(id);
    return TodoPostgreSingleton.toDomain(todo);
  }
}
