import { Inject, Logger } from '@nestjs/common';
import { Todo } from '../01-domain/todo.entity';
import { TodoPostgreSingleton } from '../03-infrastructure/server-adapter/todo.mapper.postgres';
import { ITodoRepository } from './ports/todo.repository';

// n'oublie de remove les unuse imports
export class UpdateTodoUseCase {

  private readonly logger = new Logger(UpdateTodoUseCase.name);
 
  constructor(@Inject('TodoRepository') private todoRepository: ITodoRepository) { }

  public async execute(id: number,todo: Todo ): Promise<Todo> {

       const rawTodo=TodoPostgreSingleton.toPersistence(todo)
       return await this.todoRepository.update(id, rawTodo);
  } 
}
