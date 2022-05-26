import { Inject, Logger } from '@nestjs/common';
import { Todo } from '../01-domain/todo.entity';
import { TodoPostgreSingleton } from '../03-infrastructure/server-adapter/todo.mapper.postgres';
import { ITodoRepository } from './ports/todo.repository';


export class GetAllTodosUseCase {

  private readonly logger = new Logger(GetAllTodosUseCase.name);

  constructor(@Inject('TodoRepository') private todoRepository: ITodoRepository) { }

  public async execute(): Promise<Todo[]>{
     // je prefere faire deux lignes avec deux await differents
     return await (await this.todoRepository.getAll()).map(el=> TodoPostgreSingleton.toDomain(el));
  } 
}
